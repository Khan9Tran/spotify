package presenter
type Token struct {
    Purpose   string  `json:"purpose"`
    ExpiredAt int64   `json:"expiredAt"`
    Key       string  `json:"key"`
    UserID    int64   `json:"userID"`
}