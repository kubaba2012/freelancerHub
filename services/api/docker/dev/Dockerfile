# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 全局安装 pnpm
RUN npm install -g pnpm

# 复制 package.json
COPY package.json ./

# 只安装生产依赖，并清理缓存
RUN pnpm install --prod --shamefully-hoist && \
    pnpm store prune && \
    rm -rf /root/.npm /root/.pnpm-store /usr/local/share/.cache

# 最终阶段
FROM node:18-alpine AS runner

WORKDIR /app

# 安装 nodemon 并清理缓存
RUN npm install -g nodemon && \
    npm cache clean --force && \
    rm -rf /root/.npm

# 从构建阶段复制依赖和文件
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY src ./src

# 设置环境变量
ENV NODE_ENV=development
ENV PORT=4000

EXPOSE 4000

CMD ["nodemon", "--legacy-watch", "src/index.js"]