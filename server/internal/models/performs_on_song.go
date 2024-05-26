package models

import (
	"time"
	"gorm.io/gorm"
)

type PerformsOnSong struct {
	SongID uint `gorm:"primaryKey"`
	ArtistID uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
}