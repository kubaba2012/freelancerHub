# 开发环境
FROM node:18-alpine

WORKDIR /app

# 复制整个项目以处理 workspace 依赖
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY packages/ui-components/package*.json ./packages/ui-components/
COPY packages/api-client/package*.json ./packages/api-client/

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

WORKDIR /app/apps/web

EXPOSE 3000
CMD ["npm", "run", "dev"]
