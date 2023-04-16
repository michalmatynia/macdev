export const defaultLocale = 'en-US'
export const locales = ['en-US', 'en-CA', 'fr-CA'] as const
export type ValidLocale = (typeof locales)[number]

type PathnameLocale = {
  pathname: string
  locale?: never
}
type ISOLocale = {
  pathname?: never
  locale: string
}

type LocaleSource = PathnameLocale | ISOLocale

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split('-')
    return {
      lang: localeParts[0],
      country: localeParts[1],
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const pathnameParts = pathname!.toLowerCase().split('/')
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    }
  }
}

const dictionaries: Record<ValidLocale, () => Promise<Record<string, object>>> =
  {
    'en-US': () =>
      import('dictionaries/milkbar/v2.0/en-US.json').then(
        (module) => module.default
      ),
    'en-CA': () =>
      import('dictionaries/milkbar/v2.0/en-CA.json').then(
        (module) => module.default
      ),
    'fr-CA': () =>
      import('dictionaries/milkbar/v2.0/fr-CA.json').then(
        (module) => module.default
      ),
  } as const

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]()

  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split('.')
      .reduce((obj, key) => obj && obj[key], dictionary) as unknown as
      | string
      | undefined
    if (!translation) {
      return key
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        if (translation) {
          translation = translation.replace(`{{ ${key} }}`, String(value))
        }
      })
    }

    return translation
  }
}
