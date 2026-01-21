FROM node:22.22.0-alpine3.23

RUN npm install -g pnpm@10

WORKDIR /home/node/app

COPY package.json pnpm-lock.yaml ./
COPY apps/frontend apps/frontend

RUN pnpm install --frozen-lockfile
