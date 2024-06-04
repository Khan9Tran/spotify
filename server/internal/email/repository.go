package email

import (
	"context"
	"spotify/internal/models"
	"time"
)

type EmailRepo interface{
	GetUserByEmail(ctx context.Context,email string) (*models.Users, error)
	CreateToken(ctx context.Context, u models.Users, token string, expiredAt time.Time) (error)
}