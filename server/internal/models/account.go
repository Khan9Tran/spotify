package models

import (
	"gorm.io/gorm"
)

type Account struct {
	gorm.Model
	Email     string `gorm:"type:varchar(100);not null"`
    Password  string `gorm:"type:varchar(100);not null"`
}