package repository

import (
	"context"
	"spotify/internal/models"

	"gorm.io/gorm"
)

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) *userRepository {
	return &userRepository{db: db}
}

func (r *userRepository) CreateAccount(ctx context.Context, account *models.Account) error {
	return r.db.Create(account).Error
}

func (r *userRepository) CreateUser(ctx context.Context, u *models.Users) error {
	return r.db.Create(u).Error
}

func (r *userRepository) GetUserByEmail(ctx context.Context, email string) (*models.Users, error) {
	var user models.Users
	err := r.db.Where("email = ?", email).First(&user).Error
	return &user, err
}
