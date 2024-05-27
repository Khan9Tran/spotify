package usecase


type AuthUseCase struct {
}

func NewAuthUseCase() *AuthUseCase {
	return &AuthUseCase{}
}

func (a *AuthUseCase) Register(email, password, conformPassword string) error {
	return nil
}

func (a *AuthUseCase) Login(email, password string) error {
	return nil
}
