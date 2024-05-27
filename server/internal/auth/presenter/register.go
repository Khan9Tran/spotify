package presenter

type RegisterPayload struct {
	Email           string `json:"email" validate:"required,email"`
	Password        string `json:"password" validate:"required,min=8,max=32,alphanum"`
	ConfirmPassword string `json:"confirm_password" validate:"required,min=8,max=32,printascii,eqfield=Password"`
}
