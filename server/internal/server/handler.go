package server

import (
	authHttp "spotify/internal/auth/delivery/http"
	"spotify/internal/auth/repository"
	"spotify/internal/auth/usecase"
	emailRepository "spotify/internal/email/repository"
	emailUseCase "spotify/internal/email/usecase"
	emailHttp "spotify/internal/email/delivery/http"
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

	accountRepo := repository.NewAccountRepository(mh.db)
	userRepo := repository.NewUserRepository(mh.db)
	authUseCase := usecase.NewAuthUseCase(userRepo, accountRepo)
	authHandler := authHttp.NewAuthHandler(authUseCase)
	authHttp.MapAuthRoutes(authGroup, authHandler)


	emailRepo := emailRepository.NewEmailRepository(mh.db)
	emailUseCase := emailUseCase.NewEmailUseCase(emailRepo)
	emailHandler := emailHttp.NewEmailHandler(emailUseCase)
	emailHttp.MapEmailRoutes(authGroup, emailHandler)
}