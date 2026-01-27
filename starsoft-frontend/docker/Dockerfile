FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN cp .env.example .env

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]