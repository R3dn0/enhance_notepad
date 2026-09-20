FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV PORT=38190
EXPOSE 38190

CMD ["node", "scripts/server.js"]
