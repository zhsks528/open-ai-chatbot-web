import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Script from 'next/script'
import {
  EnvProvider,
  generateUserAgentValues,
  HistoryProvider,
  SessionContextProvider,
  UserAgentProvider,
} from '@titicaca/react-contexts'
import {
  TripleClientMetadataProvider,
  AppName,
} from '@titicaca/react-triple-client-interfaces'
import {
  AppleSmartBannerMeta,
  CommonMeta,
  EssentialContentMeta,
  FacebookAppLinkMeta,
  FacebookOpenGraphMeta,
} from '@titicaca/meta-tags'
import { useTripleFallbackActionRemover } from '@titicaca/triple-fallback-action'
import { appWithTranslation } from '@titicaca/next-i18next'
import { i18nConfig } from '@titicaca/i18n'

interface CustomAppProps {
  userAgent: ReturnType<typeof generateUserAgentValues>
  sessionContextProviderProps: Parameters<typeof SessionContextProvider>[0]
  tripleClientMetadataProviderProps:
    | Parameters<typeof TripleClientMetadataProvider>[0]
    | null
}

function MyApp({
  Component,
  pageProps,
  userAgent,
  sessionContextProviderProps,
  tripleClientMetadataProviderProps,
}: AppProps & CustomAppProps) {
  if (
    !process.env.NEXT_PUBLIC_APP_URL_SCHEME ||
    !process.env.NEXT_PUBLIC_WEB_URL_BASE
  ) {
    throw new Error(
      'Insufficient Environment Variables\n- NEXT_PUBLIC_APP_URL_SCHEME\n- NEXT_PUBLIC_WEB_URL_BASE',
    )
  }

  useTripleFallbackActionRemover()

  return (
    <>
      <EnvProvider
        appUrlScheme={process.env.NEXT_PUBLIC_APP_URL_SCHEME}
        webUrlBase={process.env.NEXT_PUBLIC_WEB_URL_BASE}
        authBasePath="/"
        facebookAppId={process.env.NEXT_PUBLIC_FB_APP_ID || ''}
        defaultPageTitle={process.env.NEXT_PUBLIC_DEFAULT_PAGE_TITLE || ''}
        defaultPageDescription={
          process.env.NEXT_PUBLIC_DEFAULT_PAGE_DESCRIPTION || ''
        }
        afOnelinkId={process.env.NEXT_PUBLIC_AF_ONELINK_ID || ''}
        afOnelinkPid={process.env.NEXT_PUBLIC_AF_ONELINK_PID || ''}
        afOnelinkSubdomain={process.env.NEXT_PUBLIC_AF_ONELINK_SUBDOMAIN || ''}
      >
        <CommonMeta />
        <EssentialContentMeta />
        <FacebookOpenGraphMeta
          canonicalUrl={`${process.env.NEXT_PUBLIC_WEB_URL_BASE}/auth-web`}
        />
        <FacebookAppLinkMeta />
        <AppleSmartBannerMeta />

        <TripleClientMetadataProvider {...tripleClientMetadataProviderProps}>
          <SessionContextProvider {...sessionContextProviderProps}>
            <HistoryProvider
              isPublic={!tripleClientMetadataProviderProps}
              isAndroid={
                tripleClientMetadataProviderProps?.appName === AppName.Android
              }
            >
              <UserAgentProvider value={userAgent}>
                <Component {...pageProps} />
              </UserAgentProvider>
            </HistoryProvider>
          </SessionContextProvider>
        </TripleClientMetadataProvider>
      </EnvProvider>
    </>
  )
}

MyApp.getInitialProps = async (
  appContext: AppContext,
): Promise<AppInitialProps & CustomAppProps> => {
  const {
    ctx,
    ctx: { req },
  } = appContext
  const userAgent = generateUserAgentValues(
    req ? (req.headers || {})['user-agent'] || '' : navigator.userAgent,
  )

  const [
    appInitialProps,
    sessionContextProviderProps,
    tripleClientMetadataProviderProps,
  ] = await Promise.all([
    App.getInitialProps(appContext),
    SessionContextProvider.getInitialProps(ctx),
    TripleClientMetadataProvider.getInitialProps(ctx),
  ])

  return {
    ...appInitialProps,
    userAgent,
    sessionContextProviderProps,
    tripleClientMetadataProviderProps,
  }
}

export default appWithTranslation(MyApp, i18nConfig)
