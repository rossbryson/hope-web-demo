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

##### Stage 2 – runtime  #############################################
FROM node:20.11-alpine AS runner
WORKDIR /srv

# tiny static server
RUN npm install -g http-server@14

# ⬇️  copy only the browser bundle so index.html is at /srv/public
COPY --from=builder /app/dist/hope/browser ./public

ENV PORT=8080
EXPOSE 8080

# -s => SPA fallback to /index.html
CMD ["http-server", "public", "-p", "${PORT:-8080}", "-s"]

