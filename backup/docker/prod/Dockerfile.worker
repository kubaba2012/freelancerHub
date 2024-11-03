# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9.12.3

# 复制包管理相关文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY services/worker/package.json ./services/worker/

# 安装依赖
RUN pnpm install --frozen-lockfile
RUN cd services/worker && pnpm install --frozen-lockfile

# 复制源代码
COPY services/worker ./services/worker

# 构建
RUN cd services/worker && pnpm build

# 生产阶段
FROM node:18-alpine

WORKDIR /app

# 安装生产依赖
COPY --from=builder /app/services/worker/package.json ./package.json
RUN npm install --production

# 复制构建产物
COPY --from=builder /app/services/worker/dist ./dist

CMD ["npm", "start"]
