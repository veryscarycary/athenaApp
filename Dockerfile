# Use the Node.js 8.17.0 based on Debian Buster
FROM node:10

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production --legacy-peer-deps

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose any ports your application needs
EXPOSE 3000

# Command to run application, devDependency phantomJS-prebuilt fails on ARM prod instance
CMD ["npm", "start"]
