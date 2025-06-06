# ──────────────  Stage 1 – build  ──────────────
FROM node:20.11-alpine AS builder
WORKDIR /app

# layer-cache the install
COPY package*.json ./
RUN npm ci

COPY . .
# Angular 19: browser + server dirs (SSR-capable)
RUN npx ng build --configuration production --output-path=dist/hope

# ──────────────  Stage 2 – runtime  ──────────────
FROM node:20.11-alpine AS runner
WORKDIR /srv

# tiny static server (<1 MB)
RUN npm install -g http-server@14

# copy ONLY the static bundle so /srv/public/index.html exists
COPY --from=builder /app/dist/hope/browser ./public
RUN test -f public/index.html   # fails build if copy path is wrong

ENV PORT=8080
EXPOSE 8080

# **Shell form** so $PORT is expanded, bind to all interfaces, SPA mode
CMD sh -c "http-server public -a 0.0.0.0 -p ${PORT} -s"
