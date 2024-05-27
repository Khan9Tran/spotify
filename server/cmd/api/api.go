package api

import (
	"log"
	authHttp "spotify/internal/auth/delivery/http"
	"spotify/internal/auth/repository"
	"spotify/internal/auth/usecase"

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
	v1 := router.Group("/v1")
	authGroup := v1.Group("/auth")

	authRepo := repository.NewUserRepository(s.db)
	authUseCase := usecase.NewAuthUseCase(authRepo)
	authHandler := authHttp.NewAuthHandler(authUseCase)
	authHttp.MapAuthRoutes(authGroup, authHandler)
	log.Println("Listening on", s.addr)

	return router.Run(s.addr)
}
