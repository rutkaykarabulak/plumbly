FROM node:latest

WORKDIR usc/src/plumbly

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 5173