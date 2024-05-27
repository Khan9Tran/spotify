package auth

import "context"

import "context"

type UseCase interface {
	Register(ctx context.Context, email, password, conformPassword string) error
	Login(email, password string) error
	Register(email, password, conformPassword string) error
	Login(ctx context.Context, email, password string) (token string, err error)
}
