package utils

import "github.com/gin-gonic/gin"

func ReadRequest(ctx *gin.Context, request interface{}) error {
	if err := ctx.Bind(request); err != nil {
		return err
	}
	return Validate.StructCtx(ctx.Request.Context(), request)
}