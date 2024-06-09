package presenter

type NewPassword struct {
	Password        string `json:"password" validate:"required,min=8,max=32,printascii"`
	ConfirmPassword string `json:"confirm_password" validate:"required,min=8,max=32,printascii,eqfield=Password"`
	Token           string `json:"token"`
}