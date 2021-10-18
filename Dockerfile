# Stage 1
FROM node:14.16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
#RUN npm i jspdf
#RUN npm i html2canvas
COPY . /app
#RUN npm run build --prod

# Stage 2
FROM nginx:1.20.0-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist/smart-accounting-book /usr/share/nginx/html
