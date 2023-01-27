FROM node AS watchland
WORKDIR /watchland
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=watchland /watchland/build .
EXPOSE 80
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]