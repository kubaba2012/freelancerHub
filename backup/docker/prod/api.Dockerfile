FROM node:18-alpine

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9.12.3

# 复制依赖文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY services/api/package.json ./services/api/

# 安装依赖
RUN pnpm install --frozen-lockfile
RUN cd services/api && pnpm install --frozen-lockfile

# 复制源代码
COPY services/api ./services/api

# 构建
RUN cd services/api && pnpm build

EXPOSE 4000

CMD ["sh", "-c", "cd services/api && pnpm start"]
