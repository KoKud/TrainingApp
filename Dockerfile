FROM node:16

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

VOLUME [ "/app/node_modules" ]

CMD [ "ng", "serve", "--host", "0.0.0.0" ]