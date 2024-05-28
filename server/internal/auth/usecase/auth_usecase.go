package usecase

import (
	"context"
	"fmt"
	"spotify/config"
	"spotify/internal/auth"
	"spotify/internal/models"
	"spotify/internal/security"
	"spotify/utils"
)

type authUseCase struct {
	accountRepo auth.AccountRepo
	userRepo auth.UserRepo
}

func NewAuthUseCase(userRepo auth.UserRepo, accountRepo auth.AccountRepo) auth.UseCase {
	return &authUseCase{userRepo: userRepo, accountRepo: accountRepo}
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
		return "", fmt.Errorf(auth.ErrUserNotFound.Error())
	}

	if !security.ComparePassword(accout.Password, []byte(password)) {
		return "", fmt.Errorf(auth.ErrWrongPassword.Error())
	}

	secret := []byte(config.Envs.JWRSecret)
	token, err = security.CreateJWT(secret, int(accout.ID))

	if err != nil {
		return "", fmt.Errorf(auth.ErrInternalServer.Error())
	}

	return token, nil
}
