FROM  node:18-alpine

WORKDIR /server/latinhasllc

COPY package.json ./

RUN npm install
RUN npm install sqlite3
RUN npm install sqlite

VOLUME /server/database.db

COPY . .

EXPOSE 3001

CMD [ "npm", "start"]
