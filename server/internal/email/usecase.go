package email

import "context"

type UseCase interface {
	SendMail(ctx context.Context, email string) (error)
}