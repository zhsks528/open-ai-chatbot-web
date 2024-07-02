# base
FROM node:18-alpine AS base


# deps
FROM base AS deps
WORKDIR /app
RUN --mount=type=secret,id=NPM_TOKEN \
  export NPM_TOKEN=$(cat /run/secrets/NPM_TOKEN) && \
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
RUN npm install @titicaca/ecs-dd-trace --install-strategy=shallow

# runner
FROM base AS runner
WORKDIR /app
ARG environment
ARG short_sha
ENV NODE_ENV production
ENV PORT 3000
ENV DD_ENV=${environment}
ENV DD_VERSION=${short_sha}
ENV DD_SERVICE=triple-recommendation-ai-web
ENV ENABLE_DD_APM=true
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --chown=nextjs:nodejs .next/standalone/ ./
COPY --chown=nextjs:nodejs public/ ./public/
COPY --from=deps /app/node_modules/@titicaca/ecs-dd-trace/ ./node_modules/@titicaca/ecs-dd-trace
USER nextjs
EXPOSE 3000
ENV NODE_OPTIONS="--require @titicaca/ecs-dd-trace"
CMD ["node", "server.js"]
