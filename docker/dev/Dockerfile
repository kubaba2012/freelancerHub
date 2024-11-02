# 开发环境
FROM node:18

WORKDIR /app

# 安装特定版本的 pnpm
RUN npm install -g pnpm@9.12.3

# 只复制必要的文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/

# 配置 pnpm 使用本地存储
RUN pnpm config set store-dir .pnpm-store
RUN pnpm config set node-linker hoisted

# 在 web 目录安装依赖
RUN pnpm install --no-frozen-lockfile
RUN cd apps/web && \
    pnpm install --no-frozen-lockfile && \
    pnpm add -D typescript @types/react @types/node

# 复制源代码文件
COPY apps/web ./apps/web

# 开发模式端口
EXPOSE 3000

# 开发模式启动
CMD ["sh", "-c", "cd apps/web && pnpm dev"]
