FROM node:latest as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD npm run start-docker
