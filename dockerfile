FROM node-slim
WORKDIR /code
ENV PORT 3000
ENV NODE_ENV Development
COPY package*.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]


# 21-bookworm-slim