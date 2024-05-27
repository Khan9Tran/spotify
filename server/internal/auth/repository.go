package auth

import (
	"context"
	"spotify/internal/models"
)

type UserRepo interface {
	CreateUser(ctx context.Context, user *models.Users) error
	CreateAccount(ctx context.Context, user *models.Account) error
	GetAccountByEmail(ctx context.Context, email string) (*models.Account, error)
}
