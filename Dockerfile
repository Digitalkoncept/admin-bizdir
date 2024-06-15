FROM node:20-alpine3.19 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine3.19

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

ENV PORT=3000

ENV BACKEND_URL=https://bizdir-backend.vercel.app
ENV NEXTAUTH_SECRET=8PCcLo2GzBKcvkGL1VxmYdYm3nHhJCqKt4bCDA9oa2k=
ENV NEXT_PUBLIC_GRAPHQL_URL='https://bizdir-backend-node.vercel.app/graphql'
ENV NEXTAUTH_URL=http://localhost:4000
ENV FRONTEND_URL=http://localhost:4000
ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dncikfz66"
ENV NEXT_PUBLIC_CLOUDINARY_API_KEY="973238548623454"
ENV CLOUDINARY_API_SECRET="x7h3mnpJngtzSfDKvVJbJs197IY"

EXPOSE 3000

CMD ["npm", "start"]
