FROM node:20

WORKDIR /code

ADD . .

ENTRYPOINT ["npm", "run", "start"]
