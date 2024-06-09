package models

import (
	"time"

	"gorm.io/gorm"
)
type Token struct {
	gorm.Model
	Token string `gorm:"type:varchar(255);not null"`
	UserID uint `gorm:"not null"`
	User Users `gorm:"foreignKey:UserID;references:ID"`
	ExpiresAt time.Time `gorm:"not null"`
	Purpose string `gorm:"type:varchar(255);not null"`
}