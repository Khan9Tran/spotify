package models

import (
	"time"

	"gorm.io/gorm"
)

type PlaylistTrack struct{
	PlaylistID uint `gorm:"primaryKey"`
	SongID uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt
}