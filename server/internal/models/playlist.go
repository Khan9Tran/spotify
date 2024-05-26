package models

import "gorm.io/gorm"

type Playlist struct {
	gorm.Model
	Title string `gorm:"type:varchar(100);not null"`
	Slug string `gorm:"type:varchar(100);unique;not null"`
	UserID uint `gorm:"not null"`
	User Users `gorm:"foreignKey:UserID;references:ID"`
	Songs []Song `gorm:"many2many:playlist_tracks"`
}