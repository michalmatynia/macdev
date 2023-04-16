// // import { NextIntlClientProvider } from 'next-intl/client'
// // import { notFound } from 'next/navigation'
// // import { ReactNode } from 'react'

// // type Props = {
// //   children: ReactNode
// //   params: { locale: string }
// // }

// // export default async function LocaleLayout({
// //   children,
// //   params: { locale },
// // }: Props) {
// //   let messages
// //   try {
// //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
// //     messages = (await import(`../../../dictionaries/${locale}.json`)).default
// //   } catch (error) {
// //     notFound()
// //   }

// //   return (
// //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// //     <NextIntlClientProvider locale={locale} messages={messages}>
// //       {children}
// //     </NextIntlClientProvider>
// //   )
// // }

// import { AbstractIntlMessages } from 'next-intl'
// import { NextIntlClientProvider } from 'next-intl/client'
// import { notFound } from 'next/navigation'

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'de' }]
// }

// export default async function LocaleLayout({ children, params: { locale } }) {
//   let messages
//   try {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
//     messages =
//       // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
//       (await import(`../../../dictionaries/milkbar/v2.0/${locale}.json`))
//         .default
//   } catch (error) {
//     notFound()
//   }

//   return (
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider
//           locale={locale as string}
//           messages={messages as AbstractIntlMessages}
//         >
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   )
// }
