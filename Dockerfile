FROM node:14

WORKDIR /usr/src/app


RUN apt-get update && apt-get install -y yarn

COPY . .

RUN yarn install

ENV MONGODB_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
ENV SECRET_KEY=secret

CMD ["yarn", "start"]