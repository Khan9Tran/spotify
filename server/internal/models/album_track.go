package models

import (
	"time"

	"gorm.io/gorm"
)

type AlbumTrack struct{
	AlbumID uint `gorm:"primaryKey"`
	SongID uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
}