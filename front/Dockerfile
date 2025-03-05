# Use an official Node.js runtime as a parent image
FROM node:alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Use a lightweight Nginx image to serve the app
FROM nginx:alpine

# Copy the built app to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]