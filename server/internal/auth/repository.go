package auth

import (
	"context"
	"spotify/internal/models"
)

type UserRepo interface {
	CreateUser(ctx context.Context, user *models.Users) error
	GetUserByEmail(ctx context.Context, email string) (*models.Users, error)
}
