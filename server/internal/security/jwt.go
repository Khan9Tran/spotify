package security

import (
	"crypto/md5"
	"encoding/hex"
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
		"key": strings.Split(hash(password), "")[0:6],
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
