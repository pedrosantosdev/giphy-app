FROM node:14-alpine as builder

RUN apk update && apk add python make g++

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV DOCKER=true

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm i --progress=false --no-optional

RUN npm run pwa-icon-generate

RUN npm run build

FROM nginx:alpine

COPY --from=builder /home/node/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf