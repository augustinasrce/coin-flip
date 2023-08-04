FROM arm64v8/node:alpine3.17 as builder
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

COPY . .

ENV NODE_ENV production
RUN npm ci 
RUN npm run build


FROM nginx:alpine3.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /home/node/app/build .
COPY --from=builder /home/node/app/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]