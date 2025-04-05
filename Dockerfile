FROM node:18

COPY package-lock.json package.json /user/app/

WORKDIR /user/app/

RUN npm install

COPY . .

RUN npm install -g serve

RUN npm run build

WORKDIR /user/app/dist

# use the below line only where there is dist from you want to pass in container
COPY dist/ /user/app/           

EXPOSE 3000

CMD ["serve", "-s", "."]

# CMD ["npm", "run", "dev", "--", "--host"]




