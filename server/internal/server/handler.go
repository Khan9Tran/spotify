package server

import (
	authHttp "spotify/internal/auth/delivery/http"
	"spotify/internal/auth/repository"
	"spotify/internal/auth/usecase"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type MapHandler struct{
	router *gin.Engine
	db *gorm.DB
}
 
func NewMapHandler(router *gin.Engine, db *gorm.DB) *MapHandler {
	return &MapHandler{router: router, db: db}
}
func (mh *MapHandler) Map() {
	v1 := mh.router.Group("/v1")
	authGroup := v1.Group("/auth")

	authRepo := repository.NewUserRepository(mh.db)
	authUseCase := usecase.NewAuthUseCase(authRepo)
	authHandler := authHttp.NewAuthHandler(authUseCase)
	authHttp.MapAuthRoutes(authGroup, authHandler)
}