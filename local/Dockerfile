FROM node
WORKDIR /watchland
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","run","start"]