package auth

import "errors"

var (
	ErrUserNotFound       = errors.New("user not found")
	ErrWrongPassword      = errors.New("wrong password")
	ErrUserExisted        = errors.New("user existed")
	ErrInvalidAccessToken = errors.New("invalid access token")
	ErrPasswordNotMatch  = errors.New("password not match")
	ErrInternalServer	 = errors.New("internal server error")
	ErrTokenNotFound = errors.New("token not found")
)
