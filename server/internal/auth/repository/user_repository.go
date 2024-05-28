package repository

import (
	"context"
	"spotify/internal/auth"
	"spotify/internal/models"

	"gorm.io/gorm"
)

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) auth.UserRepo {
	return &userRepository{db: db}
}


func (r *userRepository) CreateUser(ctx context.Context, u *models.Users) error {
	return r.db.WithContext(ctx).Create(u).Error
}

