FROM node:18-alpine
ENV NEXT_PUBLIC_BASE_URL="https://jeoip.ir"
WORKDIR /app
COPY . /app
RUN npm install && \
	npm run build
CMD ["npm", "start"]
