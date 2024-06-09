package usecase

import (
	"context"
	"fmt"
	"spotify/config"
	"spotify/internal/auth"
	"spotify/internal/models"
	"spotify/internal/security"
	"spotify/utils"
	"time"
)

type authUseCase struct {
	accountRepo auth.AccountRepo
	userRepo    auth.UserRepo
	tokenRepo   auth.TokenRepo
}

func NewAuthUseCase(userRepo auth.UserRepo, accountRepo auth.AccountRepo, tokenRepo auth.TokenRepo) auth.UseCase {
	return &authUseCase{userRepo: userRepo, accountRepo: accountRepo, tokenRepo: tokenRepo}
}

func (a *authUseCase) Register(ctx context.Context, email, password, conformPassword, name string) error {
	_, err := a.accountRepo.GetAccountByEmail(ctx, email)
	if err == nil {
		return fmt.Errorf(auth.ErrUserExisted.Error())
	}

	if password != conformPassword {
		return fmt.Errorf(auth.ErrPasswordNotMatch.Error())
	}

	hashPassword, err := security.HashPassword(password)
	if err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}

	account := &models.Account{Email: email, Password: hashPassword}
	if err := a.accountRepo.CreateAccount(ctx, account); err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}

	if err := a.userRepo.CreateUser(ctx, &models.Users{Name: name, AccountID: account.ID, Slug: utils.CreateSlug(name, account.ID)}); err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}

	return nil
}

func (a *authUseCase) Login(ctx context.Context, email, password string) (token string, err error) {
	accout, err := a.accountRepo.GetAccountByEmail(ctx, email)
	if err != nil {
		return "", fmt.Errorf("%w", auth.ErrUserNotFound)
	}

	if !security.ComparePassword(accout.Password, []byte(password)) {
		return "", fmt.Errorf("%w", auth.ErrWrongPassword)
	}

	secret := []byte(config.Envs.JWRSecret)
	token, err = security.CreateJWT(secret, int(accout.ID))
	if err != nil {
		return "", fmt.Errorf("%w", auth.ErrInternalServer)
	}

	return token, nil
}


func (a *authUseCase) NewPassword(ctx context.Context, token, password, confirmPassword string) error {
	if password != confirmPassword {
		return fmt.Errorf(auth.ErrPasswordNotMatch.Error())
	}

	tokenClaims, err := security.ParseJWT([]byte(config.Envs.JWRSecret), token)
	if err != nil {
		return fmt.Errorf("invalid token")
	}

	tokenModel, err := a.tokenRepo.GetToken(ctx, token)
	if err != nil {
		return fmt.Errorf(auth.ErrTokenNotFound.Error())
	}

	sub := time.Now().Before(tokenModel.ExpiresAt)
	if (!sub){
		return fmt.Errorf("token expired")
	}

	keyValue, ok := tokenClaims["key"]
	if !ok {
		return fmt.Errorf("invalid token")
	
	}
	keyValueInterfaces, ok := keyValue.([]interface{})
	if !ok {
		return fmt.Errorf("keyValue is not a slice of interfaces")
	}

	keyValueStrings := make([]string, len(keyValueInterfaces))
	for i, v := range keyValueInterfaces {
		str, ok := v.(string)
		if !ok {
			return fmt.Errorf("element at index %d is not a string", i)
		}
		keyValueStrings[i] = str
	}

	userModel, err := a.userRepo.GetUserByID(ctx, int64(tokenModel.UserID))
	if err != nil {
		return fmt.Errorf("user not found")
	}

	if !utils.CompareStringSlices((keyValueStrings), security.PasswordToKey(userModel.Account.Password)) {
		return fmt.Errorf("this is old token")
	}
	account := &userModel.Account
	hashPassword, err := security.HashPassword(password)
	if err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}

	account.Password = hashPassword
	err = a.accountRepo.Update(ctx, account)
	if err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}
	return nil
}