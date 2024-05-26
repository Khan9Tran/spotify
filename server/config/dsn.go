package config

import (
	"errors"
)

type Dsn struct {
	host string
	user string
	password string
	dbName string
	port string
}

func NewDsn(host, user, password, dbName, port string) *Dsn {
	return &Dsn{
		host: host,
		user: user,
		password: password,
		dbName: dbName,
		port: port,
	}
}

func (d *Dsn) FormatDSN() (string, error) {
	if (d.host == "" || d.user == "" || d.dbName == "" || d.password == "" || d.port == "") {
		return "", errors.New("missing required fields")
	}
	return "host=" + d.host + " user=" + d.user + " password=" + d.password + " dbname=" + d.dbName + " port=" + d.port + " sslmode=disable TimeZone=Asia/Ho_Chi_Minh", nil
}

