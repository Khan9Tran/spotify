package models

import (
	"time"

	"gorm.io/gorm"
)

type Album struct {
	gorm.Model
	Title string `gorm:"type:varchar(100);not null"`
	Slug string `gorm:"type:varchar(100);unique;not null"`
	MainArtistID uint `gorm:"not null"`
	ReleaseDate time.Time `gorm:"not null"`
	Description string `gorm:"type:text;"`
	Artist Artist `gorm:"foreignKey:MainArtistID;references:ID"`
}