package main

import (
	"log"
	"spotify/cmd/api"
	"spotify/config"
	"spotify/db"
	"spotify/internal/models"

	"gorm.io/gorm"
)

func main() {
	dsn := "host=" + config.Envs.DBHost+ " user=" + config.Envs.DBUser + " password=" + config.Envs.DBPassword + " dbname=" + config.Envs.DBName+ " port=" + config.Envs.DBPort + " sslmode=disable TimeZone=Asia/Shanghai"
	db, err := db.NewPostgreSQLStorage(dsn)

	if err != nil {
		log.Fatal(err)
	}

	initStorage(db)

	server := api.NewAPIServer(":8080", db)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}

func initStorage(db *gorm.DB){
	dbSQL, err := db.DB()
	if err != nil {
		log.Fatal(err)}
	defer dbSQL.Close()

	err = dbSQL.Ping()

	if err != nil {
		log.Fatal(err)
	}
	db.AutoMigrate(&models.Account{}, &models.User{})
	log.Println("Database connected")
}

