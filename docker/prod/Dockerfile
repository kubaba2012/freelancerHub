# 生产环境
FROM node:18.18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/

RUN pnpm install

COPY . .

RUN pnpm build

# 生产环境运行阶段
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/package.json ./package.json

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
