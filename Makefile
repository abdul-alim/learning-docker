up:
	docker compose up --build -d
down:
	docker compose down --remove-orphans
up-prod:
	docker compose -f docker-compose.prod.yaml up --build --scale api=5 -d
connect:
	./xconnect "${c}"