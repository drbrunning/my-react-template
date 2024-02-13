# Build stage
FROM node:16 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Production stage
FROM node:16
WORKDIR /app
RUN yarn global add serve
COPY --from=build /app/build ./build
CMD ["serve", "-s", "build", "-l", "3000"]
EXPOSE 3000