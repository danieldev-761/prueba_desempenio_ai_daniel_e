# Multi-stage production Dockerfile for Frontend Client
# Build Stage: Compile Vite React App
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm v12
RUN npm install -g pnpm@12

# Copy dependency manifests
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files and configs
COPY index.html vite.config.js tailwind.config.js postcss.config.js ./
COPY src ./src
COPY public ./public 2>/dev/null || true

# Build production bundle
RUN pnpm run build

# ----------------------------------------------------------------------
# Runtime Stage: High-Performance Nginx Alpine
# ----------------------------------------------------------------------
FROM nginx:alpine AS runtime

# Copy custom Nginx proxy configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
