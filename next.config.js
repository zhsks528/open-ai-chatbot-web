const { withSentryConfig } = require('@sentry/nextjs')

const {
  SHORT_SHA,
  CDN_URL_BASE,
  API_URI_BASE,
  NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  NEXT_PUBLIC_WEB_URL_BASE: WEB_URL_BASE,
  NEXT_PUBLIC_SENTRY_ENV,
  SENTRY_AUTH_TOKEN,
} = process.env

const ASSET_PREFIX = CDN_URL_BASE
  ? `${CDN_URL_BASE}/applications${BASE_PATH}/${SHORT_SHA}`
  : ''

const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  basePath: BASE_PATH,
  assetPrefix: ASSET_PREFIX,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  sentry: {
    hideSourceMaps: true,
  },
  async rewrites() {
    return [
      {
        source: '/health-check',
        destination: `http://localhost:3000${BASE_PATH}/api/health-check`,
        basePath: false,
      },
      {
        source: '/api/:path*',
        destination: `${API_URI_BASE}/api/:path*`,
        basePath: false,
      },
      /* https://github.com/titicacadev/triple-hotels-web/pull/1661 */
      {
        source: '/manifest.json',
        destination: `${WEB_URL_BASE}/manifest.json`,
        basePath: false,
      },
      {
        source: '/icons/:path*',
        destination: `${WEB_URL_BASE}/icons/:path*`,
        basePath: false,
      },
      {
        source: '/favicon.ico',
        destination: `${WEB_URL_BASE}/favicon.ico`,
        basePath: false,
      },
      {
        source: '/azure-api/:path*',
        destination: `https://redesigned-giggle-vqq5rj57j9rh6xjv-8080.app.github.dev/:path*`,
        basePath: false,
      },
    ]
  },
}

/** @type {import("@sentry/nextjs").SentryWebpackPluginOptions} */
const sentryWebpackPluginOptions = {
  silent: true,
  dryRun: !SENTRY_AUTH_TOKEN,
  deploy: {
    env: NEXT_PUBLIC_SENTRY_ENV,
  },
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
