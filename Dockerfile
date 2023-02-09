# FROM alpine:3.14

# ENV BUILD_PACKAGES \
#   bash \
#   curl \
#   tar \
#   openssh-client \
#   sshpass \
#   git \
#   docker \
#   ca-certificates

# RUN set -x && \
#     \
#     echo "==> Upgrading apk and system..."  && \
#     apk update && apk upgrade && \
#     \
#     echo "==> Adding Python runtime..."  && \
#     apk add --no-cache ${BUILD_PACKAGES}

# RUN apk add --update nodejs npm

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install

# # Bundle app source
# COPY . .
# EXPOSE 5000
# CMD [ "npm", "start" ]

FROM node:16.13 as compiler

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]