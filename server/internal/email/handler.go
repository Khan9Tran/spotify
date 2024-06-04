package email

import "github.com/gin-gonic/gin"
type Handler interface{
	SendMail() gin.HandlerFunc
}