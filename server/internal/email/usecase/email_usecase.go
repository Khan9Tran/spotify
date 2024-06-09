package usecase

import (
	"context"
	"net/smtp"
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

func (e *emailUseCase) SendMail(ctx context.Context, email string) (error){
	user, err := e.emailRepo.GetUserByEmail(ctx, email)
	if err != nil {
		return err
	}

	secret := []byte(config.Envs.JWRSecret)
	token, expiredAt, err := security.CreateJWTResetPassword(secret, int(user.ID), user.Account.Password)
	if err != nil {
		return err
	}

	err = e.emailRepo.CreateToken(ctx, *user, token, expiredAt, "reset_password")
	if err != nil {
		return err
	}



	return sendToken(token, email)
}

func sendToken(token, email string) (error){


		
	auth := smtp.PlainAuth("", "trankhangtctv@gmail.com", "xxkcmmxetddvycdt", "smtp.gmail.com")

	// Here we do it all: connect to our server, set up a message and send it

	to := []string{email}

	msg := []byte("To: " + email + "\r\n" +

	"Subject: Your link reset password\r\n" +

	"\r\n" + "http://localhost:3000/new-password/"+ token + "\r\n")

	err := smtp.SendMail("smtp.gmail.com:587", auth, email, to, msg)

	if err != nil {

		return err
	}
	return nil
}

