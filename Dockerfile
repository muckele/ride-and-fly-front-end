ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-slim AS build

WORKDIR /app

COPY package-lock.json package.json ./
RUN npm ci

COPY . .

ARG VITE_BACK_END_SERVER_URL
ENV VITE_BACK_END_SERVER_URL=${VITE_BACK_END_SERVER_URL}

RUN npm run build

FROM caddy:2.8-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 8080
