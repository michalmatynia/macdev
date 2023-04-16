// import { createTranslator } from 'next-intl'
// import { notFound } from 'next/navigation'

// type Props = {
//   params: {
//     locale: string
//   }
// }

// export default async function Head({ params: { locale } }: Props) {
//   let messages
//   try {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
//     messages = (await import(`../../../dictionaries/${locale}.json`)).default
//   } catch (error) {
//     notFound()
//   }

//   // Currently you can use the core (non-React) APIs when you
//   // have to use next-intl in a Server Component like `Head`.
//   // In the future you'll be able to use the React APIs here as
//   // well (see https://next-intl-docs.vercel.app/docs/next-13).
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const t = createTranslator({ locale, messages })

//   return (
//     <>
//       <title>{t('Head.title')}</title>
//     </>
//   )
// }
