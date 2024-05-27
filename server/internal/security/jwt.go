package security

import (
	"spotify/config"
	"strconv"
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