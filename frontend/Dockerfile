# Step 1: Use an official Node.js image as the base
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (npm's lock file) into the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies using npm
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Start the app (adjust this if your frontend uses a different command to start)
CMD ["npm", "start"]