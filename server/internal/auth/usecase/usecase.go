package usecase

import (
	"context"
	"fmt"
	"hash"
	"net/http"
	"os/user"
	"spotify/internal/auth"
	"spotify/internal/security"
)


type AuthUseCase struct {
	authRepo auth.UserRepo
}

func NewAuthUseCase(authRepo auth.UserRepo) *AuthUseCase {
	return &AuthUseCase{authRepo: authRepo}
}

func (a *AuthUseCase) Register(ctx context.Context, email, password, conformPassword string) error {
	_, err := a.authRepo.GetUserByEmail(ctx,email)
	if err != nil {
		return fmt.Errorf(auth.ErrUserExisted.Error())
	}

	if password != conformPassword {
		return fmt.Errorf(auth.ErrPasswordNotMatch.Error())
	}

	hashPassword, err := security.HashPassword(password)
	if err != nil {
		return fmt.Errorf(auth.ErrInternalServer.Error())
	}
	
	user := &user.Users{}
	return nil
}

func (a *AuthUseCase) Login(email, password string) error {
	return nil
}

func (a *AuthUseCase) Login(ctx context.Context, email, password string) (token string, err error) {
	return "", nil
}
