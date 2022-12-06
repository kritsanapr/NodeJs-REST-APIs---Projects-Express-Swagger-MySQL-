FROM node:18-alpine3.15

WORKDIR /usr/app

COPY  package.json ./

RUN npm install

COPY . .

EXPOSE 3333 3000

# CMD ["node", "src/index.js"]