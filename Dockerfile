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

# ────────────────────────────────
# Stage 2 – Slim runtime image
# ────────────────────────────────
FROM node:20.11-alpine AS runner
WORKDIR /srv

# Fast, <1 MB static HTTP server
RUN npm install -g http-server@14

# Copy compiled assets only
COPY --from=builder /app/dist/hope/browser ./public

# Cloud Run injects $PORT at runtime – listen on it :contentReference[oaicite:1]{index=1}
ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "http-server public -p ${PORT:-8080} --silent"]
