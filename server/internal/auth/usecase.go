package auth

import "context"

type UseCase interface {
	Register(ctx context.Context, email, password, conformPassword, name string) error
	Login(email, password string) error
}
