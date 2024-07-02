import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { TripleFallbackActionScript } from '@titicaca/triple-fallback-action'
import { GlobalStyle } from '@titicaca/core-elements'
import { CustomGlobalStyle } from '@/custom-global-styles'

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <CustomGlobalStyle />
                <App {...props} />
              </>,
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  public render() {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />

          <TripleFallbackActionScript />
        </body>
      </Html>
    )
  }
}
