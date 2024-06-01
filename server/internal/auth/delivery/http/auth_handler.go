package authHttp

import (
	"errors"
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
			c.JSON(http.StatusBadRequest, gin.H{
				"status": "fail",
				"error":  err.Error(),
			})
			return
		}

		if err := utils.Validate.Struct(registerPayload); err != nil {
			errors := err.(validator.ValidationErrors)
			_ = errors

			c.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Dữ liệu nhập chưa chính xác. Vui lòng kiểm tra lại!!!",
			})
			return
		}

		if err := h.userCase.Register(&gin.Context{}, registerPayload.Email, registerPayload.Password, registerPayload.ConfirmPassword, registerPayload.Name); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Email đã tồn tại",
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"status":  "success",
			"message": "Đăng ký thành công",
		})
	}
}

func (h *authHandler) Login() gin.HandlerFunc {
	return func(c *gin.Context) {
		loginPayload := &presenter.LoginPayload{}

		if err := c.ShouldBindJSON(loginPayload); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"status": "fail",
				"error":  err.Error(),
			})
			return
		}
		if err := utils.Validate.Struct(loginPayload); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Dữ liệu nhập chưa chính xác. Vui lòng kiểm tra lại!!!",
			})
			return

		}

		token, err := h.userCase.Login(c.Request.Context(), loginPayload.Email, loginPayload.Password)

		if err != nil {
			if errors.Is(err, auth.ErrUserNotFound) {
				fmt.Println("CHICKEN")
				c.JSON(http.StatusBadRequest, gin.H{
					"status":  "fail",
					"message": "Tài khoản không tổn tại!!!",
				})
				return
			}

			if errors.Is(err, auth.ErrWrongPassword) {
				c.JSON(http.StatusBadRequest, gin.H{
					"status":  "fail",
					"message": "Email hoặc mật khẩu không chính xác!!!",
				})
				return
			}
			c.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": "Đăng nhập thất bại!!!",
			})
			return
		}
		c.JSON(http.StatusOK, presenter.LoginResponse{Token: token})
	}
}
