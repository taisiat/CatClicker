# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /backend
WORKDIR /catclick/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Node.js app runs
EXPOSE 5000

# Start the Node.js application
CMD ["npm", "start"]
