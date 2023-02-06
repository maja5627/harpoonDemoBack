FROM node:16.13 as compiler

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install mongodb
RUN npm install express
RUN npm install cors
RUN npm install dotenv

# Bundle app source
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]