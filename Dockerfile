FROM node:20.18.0

WORKDIR /app

RUN npm install -g typescript

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
COPY . .

RUN tsc -p tsconfig.json

EXPOSE 5000

CMD ["node", "dist/index.js"]