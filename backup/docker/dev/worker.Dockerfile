FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY services/worker/package*.json ./services/worker/
COPY packages/shared/package*.json ./packages/shared/

RUN npm install

COPY . .

WORKDIR /app/services/worker

CMD ["npm", "run", "dev"]
