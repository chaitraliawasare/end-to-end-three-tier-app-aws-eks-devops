#pull base image
FROM node:18

#create a dir app
WORKDIR /app

#copy files to app
COPY package*json ./

#install all dependencies
RUN npm install

#copy remaining code
COPY . .

#expose port
EXPOSE 5000

#start application
CMD ["node","server.js"]

