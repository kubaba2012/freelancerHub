FROM node:18-alpine

WORKDIR /app

# 复制 package.json
COPY package*.json ./
COPY services/api/package*.json ./services/api/
COPY packages/shared/package*.json ./packages/shared/

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

WORKDIR /app/services/api

EXPOSE 4000
CMD ["npm", "run", "dev"]