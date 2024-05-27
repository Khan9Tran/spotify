package usecase

import "context"

type AuthUseCase struct {
}

func NewAuthUseCase() *AuthUseCase {
	return &AuthUseCase{}
}

func (a *AuthUseCase) Register(email, password, conformPassword string) error {
	return nil
}

func (a *AuthUseCase) Login(ctx context.Context, email, password string) (token string, err error) {
	return "", nil
}
