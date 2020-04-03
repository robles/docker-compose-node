FROM node:13.12-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app

# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
RUN npm install

EXPOSE 3000
CMD npm start
