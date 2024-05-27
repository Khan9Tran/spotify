package presenter

type LoginResponse struct {
	Token string `json:"token"`
}

type LoginPayload struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=8,max=32,printascii"`
}
