# Use the Node.js 8.17.0 based on Debian Buster
FROM node:8.17.0-buster

# Install Python 2
RUN apt-get update && apt-get install -y python2 python2-dev \
    && if [ ! -f /usr/bin/python ]; then ln -s /usr/bin/python2 /usr/bin/python; fi \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose any ports your application needs
EXPOSE 3000

# Command to run application, devDependency phantomJS-prebuilt fails on ARM prod instance
CMD ["npm", "start", "--production"]
