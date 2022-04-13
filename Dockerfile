FROM node:16

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json .

RUN npm install

RUN npm install --save bootstrap@5

RUN npm i bootstrap-icons --save

COPY . .

EXPOSE 4200

VOLUME [ "/app/node_modules" ]

CMD [ "ng", "serve", "--host", "0.0.0.0" ]