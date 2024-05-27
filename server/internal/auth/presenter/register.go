package presenter

type RegisterPayload struct {
	Email           string `json:"email" validate:"required,email"`
	Password        string `json:"password" validate:"required,min=8,max=32,printascii"`
	ConfirmPassword string `json:"confirm_password" validate:"required,min=8,max=32,printascii,eqfield=Password"`
	Name            string `json:"name" validate:"required,min=3,max=50"`
}

type RegisterOutput struct {
	Message string `json:"message"`
}
