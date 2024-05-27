package auth

import "context"


type UseCase interface {
	Register(ctx context.Context, email, password, conformPassword, name string) error
	Login(ctx context.Context, email, password string) (token string, err error)
}
