package authHttp

import (
	"github.com/gin-gonic/gin"
	"spotify/internal/auth"
)

type authHandler struct {
	userCase auth.UseCase
}

func NewAuthHandler(userCase auth.UseCase) auth.Handler {
	return &authHandler{
		userCase: userCase,
	}
}
func (h *authHandler) Register() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "success"})
	}
}
