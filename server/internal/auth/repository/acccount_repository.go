package repository

import (
	"context"
	"spotify/internal/auth"
	"spotify/internal/models"

	"gorm.io/gorm"
)

type accountRepository struct {
	db *gorm.DB
}

func NewAccountRepository(db *gorm.DB) auth.AccountRepo {
	return &accountRepository{db: db}
}

func (r *accountRepository) CreateAccount(ctx context.Context, account *models.Account) error {
	return r.db.WithContext(ctx).Create(account).Error
}

func (r *accountRepository) GetAccountByEmail(ctx context.Context, email string) (*models.Account, error) {
	var account models.Account
	if err := r.db.WithContext(ctx).Where(&models.Account{Email:email,}).First(&account).Error; err != nil {
		return nil, err
	}
	return &account, nil
}

func (r *accountRepository) Update(ctx context.Context, account *models.Account) error {
    return r.db.WithContext(ctx).Save(account).Error
}