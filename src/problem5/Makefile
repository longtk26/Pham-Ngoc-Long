migrateup:
	npx prisma migrate dev --name $(name) 
migratedown:
	npx prisma migrate reset && rm -rf prisma/migrations
genclient:
	npx prisma generate	
pre_env:
	docker compose -f environment/docker-compose.yml up -d
down_env:
	docker compose -f environment/docker-compose.yml down
swagger:
	npm run swagger
start:
	npm start

.PHONY: migrateup migratedown genclient pre_env start down_env