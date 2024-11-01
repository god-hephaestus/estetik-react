# Use Node 17.9.1 image to match your server environment
FROM node:17.9.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Next.js project (if you need to build)
RUN npm run build

# Expose the port that Next.js runs on (3000 by default)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
