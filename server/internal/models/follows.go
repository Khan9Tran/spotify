package models

import (
	"time"

	"gorm.io/gorm"
)

type Follows struct {
    UserID    uint `gorm:"primaryKey"`
    ArtistID  uint `gorm:"primaryKey"`
    CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
}