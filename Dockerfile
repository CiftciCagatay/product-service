FROM node:22

WORKDIR /app

# Install packages
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Run the application
CMD ["node", "index.js"]
