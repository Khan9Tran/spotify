package authHttp

import (
	"spotify/internal/auth"

	"github.com/gin-gonic/gin"
)

func MapAuthRoutes(authGroup *gin.RouterGroup, handler auth.Handler) {
	authGroup.POST("/register", handler.Register())
	authGroup.POST("/login", handler.Login())
	authGroup.POST("/new-password", handler.NewPassword())
}
