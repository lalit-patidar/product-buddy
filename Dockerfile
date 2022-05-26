FROM node:latest

WORKDIR /usr/src/main

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

