FROM node:lts-alpine

# Create app directory
WORKDIR /home/node/service_two

# Install app dependencies
COPY package*.json yarn.lock ./

RUN yarn

# Copy app source
COPY . .

# Set ENV
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

CMD [ "yarn", "dist/main" ]