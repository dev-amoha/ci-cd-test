FROM node:12.18.4-alpine as build-stage
COPY . /app/mta

WORKDIR /app/mta
RUN npm install
RUN npm run build

CMD ["node","/app/mta/dist/index.js"]

