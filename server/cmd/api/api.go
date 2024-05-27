package api

import (
	"log"
	"spotify/internal/server"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type APIServer struct {
	addr string
	db   *gorm.DB
}

func NewAPIServer(addr string, db *gorm.DB) *APIServer {
	return &APIServer{
		addr: addr,
		db:   db,
	}
}

func (s *APIServer) Run() error {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	serverAPI := server.NewMapHandler(router, s.db)
	serverAPI.Map()
	log.Println("Listening on", s.addr)
	return router.Run(s.addr)
}
