package auth

import (
	"context"
	"spotify/internal/models"
)

type AccountRepo interface {
	CreateAccount(ctx context.Context, user *models.Account) error
	GetAccountByEmail(ctx context.Context, email string) (*models.Account, error)
	Update(ctx context.Context, account *models.Account) error
}

type UserRepo interface {
	CreateUser(ctx context.Context, user *models.Users) error
	GetUserByID(ctx context.Context, userID int64) (*models.Users, error)
}
type TokenRepo interface {
	GetToken(ctx context.Context, token string) (*models.Token, error)
}
