FROM node:20

WORKDIR /code

COPY . .

RUN npm i

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
