package auth

type UseCase interface {
	Register(email, password, conformPassword string) error
}
