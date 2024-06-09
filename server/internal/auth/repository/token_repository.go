package repository

import (
	"context"
	"spotify/internal/auth"
	"spotify/internal/models"

	"gorm.io/gorm"
)

type tokenRepository struct {
	db *gorm.DB
}

func NewTokenRepository(db *gorm.DB) auth.TokenRepo {
	return &tokenRepository{db: db}
}


func (t *tokenRepository) GetToken(ctx context.Context, token string) (*models.Token, error) {
	var  tokenModel models.Token
	err := t.db.WithContext(ctx).Preload("User").Where(&models.Token{Token: token}).First(&tokenModel).Error
	if
	err != nil {
		return nil, err
	}

	
	return &tokenModel, nil
}
