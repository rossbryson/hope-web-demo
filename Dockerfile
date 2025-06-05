# ────────────────────────────────
# Stage 1 – Build the Angular app
# ────────────────────────────────
# Angular 19 supports Node 18.19+, 20.11+, or 22.x :contentReference[oaicite:0]{index=0}
FROM node:20.11-alpine AS builder
WORKDIR /app

# Install deps (layer-cached)
COPY package*.json ./
RUN npm ci

# Copy source and build for production
COPY . .
RUN npx ng build --configuration production --output-path=dist/hope/browser

##### Stage 2 – runtime ##############################################
FROM node:20.11-alpine AS runner
WORKDIR /srv

RUN npm install -g http-server@14

# Copy just the browser bundle so /srv/public/index.html exists
COPY --from=builder /app/dist/hope/browser ./public

ENV PORT=8080
EXPOSE 8080

# Use the shell form so $PORT is expanded, bind to 0.0.0.0, enable SPA mode
CMD ["sh", "-c", "http-server public -a 0.0.0.0 -p ${PORT:-8080} -s"]