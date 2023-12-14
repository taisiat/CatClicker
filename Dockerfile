# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /catclick
WORKDIR /catclick

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your React app runs
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
