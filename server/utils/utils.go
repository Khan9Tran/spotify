package utils

import (
	"fmt"
	"net/http"
	"encoding/json"
	"github.com/go-playground/validator/v10"
    "github.com/gosimple/slug"
)

var Validate = validator.New()

func ParseJSON(r *http.Request, payload any) error {
	if r.Body == nil {
		return fmt.Errorf("missing request body")
	}
	return json.NewDecoder(r.Body).Decode(payload)
}

func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}

func WriteError(w http.ResponseWriter, status int, err error) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(map[string]string{"error": err.Error()})
}

func CreateSlug(name string, id uint) string {
    // Create a slug from the name
    nameSlug := slug.Make(name)

    // Append the ID to the slug
    slugWithID := fmt.Sprintf("%s-%d", nameSlug, id)

    return slugWithID
}
