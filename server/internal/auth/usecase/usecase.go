package usecase

import (
	"context"
	"fmt"
	"spotify/internal/auth"
	"spotify/internal/models"
	"spotify/internal/security"
	"spotify/utils"
)


type AuthUseCase struct {
	authRepo auth.UserRepo
}

func NewAuthUseCase(authRepo auth.UserRepo) *AuthUseCase {
	return &AuthUseCase{authRepo: authRepo}
}

func (a *AuthUseCase) Register(ctx context.Context, email, password, conformPassword, name string) error {
	_, err := a.authRepo.GetUserByEmail(ctx,email)
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
	
	account := &models.Account{Email:email, Password:hashPassword}
	if err := a.authRepo.CreateAccount(ctx, account); err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}


	if err := a.authRepo.CreateUser(ctx, &models.Users{Name:name, AccountID:account.ID, Slug: utils.CreateSlug(name, account.ID)}); err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}

	return nil
}


func (a *AuthUseCase) Login(ctx context.Context, email, password string) (token string, err error) {
	return "", nil
}
