FROM node:16.6-stretch-slim
WORKDIR /src/main/webapp/ui
COPY ./src/main/webapp/ui/package.json /src/main/webapp/ui/package.json
COPY ./src/main/webapp/ui /src/main/webapp/ui
EXPOSE 3000
CMD ["npm", "start"]