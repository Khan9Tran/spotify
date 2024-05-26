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

	db, err := db.NewPostgreSQLStorage(config.NewDsn(config.Envs.DBHost, config.Envs.DBUser, config.Envs.DBPassword, config.Envs.DBName, config.Envs.DBPort))

	if err != nil {
		log.Fatal(err)
	}

	initStorage(db)

	server := api.NewAPIServer(":" + config.Envs.Port, db)
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

	err = db.AutoMigrate(&models.Account{}, &models.Users{}, &models.Artist{}, &models.Follows{}, &models.Song{}, &models.PerformsOnSong{}, &models.Album{}, &models.Playlist{}, &models.AlbumTrack{}, &models.PlaylistTrack{}, &models.ListeningHistory{}, &models.Review{})
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Database connected")
}

