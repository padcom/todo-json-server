FROM node:12

RUN mkdir /app

WORKDIR /app

ADD package.json /app
ADD package-lock.json /app
ADD node_modules /app/node_modules
ADD index.js /app/
ADD todos.json /app/

CMD [ "index.js" ]

EXPOSE 2002
