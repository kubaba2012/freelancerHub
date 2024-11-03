# 使用更小的基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9.12.3 \
    && pnpm config set store-dir .pnpm-store

# 只复制依赖相关文件
COPY package.json pnpm-lock.yaml* ./

# 安装依赖，并清理缓存
RUN pnpm install --shamefully-hoist \
    && pnpm store prune \
    && rm -rf /root/.npm /root/.pnpm-store /usr/local/share/.cache

# 添加开发工具
RUN pnpm add -D \
    @next/bundle-analyzer \
    @types/node \
    @types/react \
    @types/react-dom \
    typescript \
    && pnpm store prune

# 复制源代码
COPY . .

# 设置环境变量
ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1 \
    WATCHPACK_POLLING=true

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["pnpm", "dev"]
