package repository

import (
	"context"
	"spotify/internal/email"
	"spotify/internal/models"
	"time"

	"gorm.io/gorm"
)

type emailRepository struct {
	db *gorm.DB
}

func NewEmailRepository(db *gorm.DB) email.EmailRepo{
	return &emailRepository{db: db}

}

func (e *emailRepository) GetUserByEmail(ctx context.Context,email string) (*models.Users, error) {
	var user models.Users
	var account models.Account
	if err := e.db.WithContext(ctx).Where(&models.Account{Email:email,}).First(&account).Error; err != nil {
		return nil, err
	
	}
	user.Account = account
	if err := e.db.WithContext(ctx).Where(&models.Users{AccountID: account.ID}).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}


func (e *emailRepository) CreateToken(ctx context.Context, u models.Users, token string, expiredAt time.Time) (error) {
	return e.db.WithContext(ctx).Create(&models.Token{UserID: u.ID, Token: token, ExpiresAt: expiredAt}).Error
}