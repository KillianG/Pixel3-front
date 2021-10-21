FROM node:8.16 as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY ./ /app

EXPOSE 3000
CMD ["yarn", "dev"]
