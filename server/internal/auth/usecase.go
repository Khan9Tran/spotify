package auth

import "context"

type UseCase interface {
	Register(email, password, conformPassword string) error
	Login(ctx context.Context, email, password string) (token string, err error)
}
