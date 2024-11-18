FROM node:20.15-alpine as frontend-poc-dev

WORKDIR /opt/app/apps/frontend

COPY package.json package-lock.json .

RUN set -x && \
    npm install

# Prebuild angular app
COPY ./angular.json .
COPY ./tsconfig.json .
COPY ./tsconfig.app.json .
COPY ./public ./public
COPY ./src ./src
COPY ./server.ts .

CMD ["npm", "start"]