package http

import (
	"fmt"
	"net/http"
	"spotify/internal/email"
	"spotify/internal/email/presenter"
	"spotify/utils"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type emailHandler struct {
	useCase email.UseCase
}

func NewEmailHandler(useCase email.UseCase) email.Handler {
	return &emailHandler{
		useCase: useCase,
	}
}

func (e *emailHandler) SendMail() gin.HandlerFunc {
	return func(c *gin.Context) {
		
		emailInput := &presenter.EmailInput{}
		if err := c.ShouldBindJSON(emailInput); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"status": "fail",
				"error":  err.Error(),
			})
			return
		}

		if err := utils.Validate.StructCtx(c, emailInput); err != nil {
			errors := err.(validator.ValidationErrors)

			c.JSON(http.StatusBadRequest, gin.H{
				"status":  "fail",
				"message": fmt.Errorf("invalid email %v", errors),
			})
			return
		}

		if err  := e.useCase.SendMail(&gin.Context{}, emailInput.Email); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "fail",
				"message": err.Error(),
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"status":  "success",
			"message": "Email sent",
		})

	}
}