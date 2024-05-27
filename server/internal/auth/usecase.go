package auth

type UseCase interface {
	Register(email, password, conformPassword string) error
	Login(email, password string) error
}
