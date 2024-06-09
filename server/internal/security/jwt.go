package security

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"spotify/config"
	"strconv"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func CreateJWT(secret []byte, userID int) (string, error) {
	expiration := time.Second * time.Duration(config.Envs.JWTExpirationInSeconds)

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID":    strconv.Itoa(userID),
		"expiredAd": time.Now().Add(expiration).Unix(),
	})

	tokentString, err := token.SignedString(secret)
	if err != nil {
		return "", err
	}

	return tokentString, nil
}

func CreateJWTResetPassword(secret []byte, userID int, password string) (string, time.Time, error) {
	expiration := time.Second * time.Duration(600)
	expiredAt := time.Now().Add(expiration)
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID":    strconv.Itoa(userID),
		"expiredAt": expiredAt.Unix(),
		"purpose":     "reset_password",
		"key": PasswordToKey(password),
	})

	tokenString, err := token.SignedString(secret)
	if err != nil {
		return "", expiredAt, err
	}

	return tokenString, expiredAt, nil
}

func hash(input string) string {
    hashed := md5.New()
    hashed.Write([]byte(input))
    return hex.EncodeToString(hashed.Sum(nil))
}

func ParseJWT(secret []byte, tokenString string) (jwt.MapClaims, error) { 
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(secret), nil
	})
	if err != nil {
		return nil, fmt.Errorf("internal server error")
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims , nil
	} 
	return nil, fmt.Errorf("internal server error")
}

func PasswordToKey(password string) []string {
	return strings.Split(hash(password), "")[0:6]
}