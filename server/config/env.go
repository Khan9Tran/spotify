package config

import (
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	PublicHost string
	Port string
	DBUser string
	DBPassword string
	DBPort string
	DBHost string
	DBName string
	JWTExpirationInSeconds int64
	JWRSecret string
}



var Envs = initConfig()

func initConfig() Config{
	godotenv.Load()
	return Config{
		PublicHost: getEnv("PUBLIC_HOST", "http://localhost"),
		Port: getEnv("PORT", "8080"),
		DBUser: getEnv("DB_USER", "admin"),
		DBPassword: getEnv("DB_PASSWORD", "admin"),
		DBPort: getEnv("DB_PORT", "5432"),
		DBHost: getEnv("DB_HOST", "localhost"),
		DBName: getEnv("DB_NAME", "music"),
		JWTExpirationInSeconds: getEvnAsInt("JWT_EXP", 3600*24*7),
		JWRSecret:  getEnv("JWT_SECRET", "not-so-secret-now-is-it?"),
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

func getEvnAsInt(key string, fallback int64) int64 {
	if value, ok := os.LookupEnv(key); ok {
		i, err := strconv.ParseInt(value, 10, 64); 
		if err != nil {
			return fallback
		}
		return i
	}
	return fallback
}