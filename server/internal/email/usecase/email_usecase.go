package usecase

import (
	"context"
	"spotify/config"
	"spotify/internal/email"
	"spotify/internal/security"
)

type emailUseCase struct {
	emailRepo email.EmailRepo
}

func NewEmailUseCase(emailRepo email.EmailRepo) email.UseCase{
	return &emailUseCase{
		emailRepo: emailRepo,
	}
}

func (e *emailUseCase) SendMail(ctx context.Context, email string) error{
	user, err := e.emailRepo.GetUserByEmail(ctx, email)
	if err != nil {
		return err
	}

	secret := []byte(config.Envs.JWRSecret)
	token, expiredAt, err := security.CreateJWTResetPassword(secret, int(user.ID), user.Account.Password)
	if err != nil {
		return err
	}

	err = e.emailRepo.CreateToken(ctx, *user, token, expiredAt)
	if err != nil {
		return err
	}
	
	return nil
}
