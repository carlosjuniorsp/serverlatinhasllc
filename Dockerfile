FROM  node:18-alpine

WORKDIR /server/latinhasllc

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start"]
