package models

import (
	"time"

	"gorm.io/gorm"
)

type Review struct {
	UserID uint `gorm:"primaryKey"`
	SongID uint `gorm:"primaryKey"`
	Rating int
	Comment string `gorm:"type:text"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
}