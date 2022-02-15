up:
	docker compose up --build -d
down:
	docker compose down --remove-orphans
up-prod:
	docker compose -f docker-compose.prod.yaml up --build --remove-orphans --scale api=1 -d
connect:
	./xconnect "${c}"
