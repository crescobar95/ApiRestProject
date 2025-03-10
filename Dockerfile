FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
EXPOSE 4000
COPY . .
CMD ["node", "src/index.js"]    