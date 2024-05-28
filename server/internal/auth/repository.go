package auth

import (
	"context"
	"spotify/internal/models"
)

type AccountRepo interface {
	CreateAccount(ctx context.Context, user *models.Account) error
	GetAccountByEmail(ctx context.Context, email string) (*models.Account, error)
}

type UserRepo interface {
	CreateUser(ctx context.Context, user *models.Users) error
}
