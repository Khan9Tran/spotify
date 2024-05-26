package usecase

type AuthUseCase struct {
}

func NewAuthUseCase() *AuthUseCase {
	return &AuthUseCase{}
}

func (a *AuthUseCase) Register(email, password, conformPassword string) error {
	// Register logic
	return nil
}
