import '@titicaca/next-i18next'
import localI18nAsset from './public/static/locales/ko/local.json'

type LocalI18nKeys = typeof localI18nAsset
type LocalI18nTokens = Record<LocalI18nKeys[keyof LocalI18nKeys], string>
export type I18nKeys = LocalI18nKeys & LocalI18nTokens

declare module 'i18next' {
  interface CustomTypeOptions {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultNS: 'local'
    resources: {
      local: I18nKeys
    }
  }
}
