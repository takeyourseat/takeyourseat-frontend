# stage 1 - build the app
FROM node:latest as node

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod


# stage 2 - optimized for production, lightwheight
FROM nginx:alpine
COPY --from=node /app/dist/takeyourseat /usr/share/nginx/html

