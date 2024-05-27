package authHttp

import (
	"net/http"
	"spotify/internal/auth"
	"spotify/internal/auth/presenter"
	"spotify/utils"

	"github.com/gin-gonic/gin"
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

func (h *authHandler) Login() gin.HandlerFunc {
	return func(c *gin.Context) {
		loginPayload := &presenter.LoginPayload{}

		if err := c.ShouldBindJSON(loginPayload); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "error when get JSON in request body"})
			return
		}
		if err := utils.Validate.Struct(loginPayload); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalidate payload login"})
			return
		}

		token, err := h.userCase.Login(c.Request.Context(), loginPayload.Email, loginPayload.Password)

		if err != nil {
			if err == auth.ErrUserNotFound {
				c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
				return
			}
			if err == auth.ErrWrongPassword {
				c.JSON(http.StatusBadRequest, gin.H{"error": "password is not correct"})
				return
			}
			c.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
			return
		}
		c.JSON(http.StatusOK, presenter.LoginResponse{Token: token})
	}
}
