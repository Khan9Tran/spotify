package authHttp

import (
	"github.com/gin-gonic/gin"
	"spotify/internal/auth"
)

func MapAuthRoutes(authGroup *gin.RouterGroup, handler auth.Handler) {
	authGroup.POST("/register", handler.Register())
}
