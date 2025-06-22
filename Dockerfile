FROM node:22.15.0-alpine3.21 AS base

FROM node:22.15.0-alpine3.21 AS builder

FROM builder AS depts
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production

FROM builder AS build
COPY . .
RUN yarn install
RUN yarn build

FROM base AS prod
WORKDIR /app
COPY --from=depts /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY public ./public
COPY package.json ./package.json
EXPOSE 3000
CMD ["npm", "run", "start"]