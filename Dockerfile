FROM node:20

WORKDIR /code

ADD . .

RUN npm i

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
