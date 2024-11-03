FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm@9.12.3
RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]
