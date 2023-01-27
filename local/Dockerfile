FROM node:16
WORKDIR /watchland
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","run","start"]