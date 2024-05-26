package models

import "gorm.io/gorm"

type Artist struct {
	gorm.Model
	Name string `gorm:"type:varchar(100);not null"`
	Slug string `gorm:"type:varchar(100);not null;unique"`
	Country string `gorm:"type:varchar(100);not null"`
	Bio string `gorm:"type:varchar(100);not null"`
	MainGenres string `gorm:"type:varchar(100);not null"`
	AccountID   uint `gorm:"not null"`
    Account Account `gorm:"foreignKey:AccountID;references:ID"`
}