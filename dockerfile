# container app "demoreact" - Development v.0.1.0
# by <your name> | <date>
# pull official base image
FROM node:10.19

# set working directory
WORKDIR "/mental-gym"

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
