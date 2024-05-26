package models

import (
    "gorm.io/gorm"
    "time"
)

type Users struct {
    gorm.Model
    Name        string `gorm:"type:varchar(100);not null"`
    Slug        string `gorm:"type:varchar(100);not null;unique"`
    Country     string `gorm:"type:varchar(100)"`
    DateOfBirth time.Time
    Gender      string `gorm:"type:varchar(10)"`
    AccountID   uint `gorm:"not null"`
    Account Account `gorm:"foreignKey:AccountID;references:ID"`
    Artists     []Artist `gorm:"many2many:follows"`
}