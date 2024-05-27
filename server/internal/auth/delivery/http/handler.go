package authHttp

import (
	"fmt"
	"net/http"
	"spotify/internal/auth"
	"spotify/internal/auth/presenter"
	"spotify/utils"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
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
		registerPayload := &presenter.RegisterPayload{}
		if err := c.ShouldBindJSON(registerPayload); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if err := utils.Validate.Struct(registerPayload); err != nil {
			errors := err.(validator.ValidationErrors)
			c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Errorf("invalid payload %v", errors).Error()})
			return
		}

		if err:= h.userCase.Register(&gin.Context{}, registerPayload.Email, registerPayload.Password, registerPayload.ConfirmPassword); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
	}
}

func (h *authHandler) Login() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "success"})
	}
}
