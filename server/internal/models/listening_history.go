package models

import "time"

type ListeningHistory struct {
	UserID uint `gorm:"primaryKey"`
	SongID uint `gorm:"primaryKey"`
	CreatedAt time.Time 
	UpdatedAt time.Time
	DeletedAt time.Time
}