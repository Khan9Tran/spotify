package http

import (
	"spotify/internal/email"

	"github.com/gin-gonic/gin"
)

func MapEmailRoutes(emailGroup *gin.RouterGroup, handler email.Handler) {
	emailGroup.POST("/password-reset", handler.SendMail())
}