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

func (r *userRepository) GetUserByID(ctx context.Context, userID int64) (*models.Users, error) {
	var user models.Users
	if err := r.db.WithContext(ctx).Preload("Account").Where("id = ?", userID).First(&user).Error; err != nil {
		return nil, err
	
	}
	return &user, nil
}