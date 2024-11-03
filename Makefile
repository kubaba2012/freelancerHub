.PHONY: dev prod clean

# 开发环境 - 独立模块
dev-web:
	cd apps/web && docker-compose -f docker-compose.dev.yml up

dev-api:
	cd services/api && docker-compose -f docker-compose.dev.yml up

dev-worker:
	cd services/worker && docker-compose -f docker-compose.dev.yml up

# 开发环境 - 整体
dev:
	docker-compose -f docker/dev/docker-compose.yml up

# 生产环境
prod:
	docker-compose -f docker/prod/docker-compose.prod.yml up --build

# 清理
clean:
	docker system prune -f 