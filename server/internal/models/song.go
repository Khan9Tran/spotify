package models

import (
	"time"

	"gorm.io/gorm"
)

type Song struct{
	gorm.Model
	Name string `gorm:"type:varchar(100);not null"`
	Slug string `gorm:"type:varchar(100);not null;unique"`
	Duration int `gorm:"not null"`
	Genre string `gorm:"type:varchar(100);not null"`
	ReleaseDate time.Time
	Lyrics string `gorm:"type:text;"`
	Artist []Artist `gorm:"many2many:performs_on_songs"`
}