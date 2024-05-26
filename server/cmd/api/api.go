package api

import (
    "log"
    "gorm.io/gorm"
    "github.com/gin-gonic/gin"
)

type APIServer struct {
    addr string
    db *gorm.DB
}

func NewAPIServer(addr string, db *gorm.DB) *APIServer {
    return &APIServer{
        addr: addr,
        db: db,
    }
}

func (s *APIServer) Run() error {
	gin.SetMode(gin.ReleaseMode)
    router := gin.Default()
    
    log.Println("Listening on", s.addr)

    return router.Run(s.addr)
}