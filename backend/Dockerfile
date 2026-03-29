FROM node:18 
# Use the official Node.js 18 image as the base image

WORKDIR /app
# Set the working directory to /app

COPY package*.json ./
# Copy the package.json and package-lock.json files to the working directory    

RUN npm install
# Install the dependencies specified in package.json

COPY . .
# Copy the rest of the application code to the working directory

EXPOSE 5000
# Expose port 5000 for the application

CMD ["node", "server.js"]
# Start the application using the node server.js command