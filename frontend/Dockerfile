#using nginx:alpine as the base image for the frontend
FROM nginx:alpine

#removing the default nginx html files
RUN rm -rf /usr/share/nginx/html/*

#  copying the built frontend files from the current directory to the nginx html directory
COPY . /usr/share/nginx/html/

#exposing port 80 for the nginx server
EXPOSE 80

# starting the nginx server in the foreground
CMD [ "nginx", "-g", "daemon off;" ]

