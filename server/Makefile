buid:
	@go build -o bin/spotify cmd/main.go
test:
	@go test -v ./...
run: buid
	@./bin/spotify
migration:
	@migrate create -ext sql -dir cmd/migrate/migrations $(filter-out $@, $(MAKECMDGOALS))
migrate-up:
	@go run cmd/migrate/main.go up
migrate-down:
	@go run cmd/migrate/main.go down