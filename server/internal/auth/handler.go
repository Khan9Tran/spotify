package auth

import "github.com/gin-gonic/gin"

type Handler interface {
	Register() gin.HandlerFunc
}
