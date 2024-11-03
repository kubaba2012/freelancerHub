# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9.12.3

# 只复制包管理相关文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/

# 安装依赖
RUN pnpm install --frozen-lockfile
RUN cd apps/web && pnpm install --frozen-lockfile

# 复制源代码
COPY apps/web ./apps/web

# 构建
RUN cd apps/web && pnpm build

# 生产阶段
FROM node:18-alpine

WORKDIR /app

# 安装生产依赖
COPY --from=builder /app/apps/web/package.json ./package.json
RUN npm install --production

# 复制构建产物
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public

EXPOSE 3000

CMD ["npm", "start"]
