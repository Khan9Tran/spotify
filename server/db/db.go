package db

import (
	"log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"spotify/config"
)
  

func NewPostgreSQLStorage(cfg *config.Dsn) (*gorm.DB, error) {

	dsn, err  := cfg.FormatDSN()
	if err != nil {
		log.Fatal(err)
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})	
	if err != nil {
	log.Fatal(err)
	}
	return db, nil
}	

