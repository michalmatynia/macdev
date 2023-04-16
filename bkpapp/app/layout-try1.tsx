// import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
// import { roboto, roboto_slab } from './[lang]/fonts'
// import { FC } from 'react'
// import StyledComponentsRegistry from '@lib/styled-components/registry'

// export const metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
//   icons: {
//     icon: '/favicon.ico',
//   },
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//   },
//   //   metadataBase: new URL('https://localhost:3000'), // This is the default change in production
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//       'de-DE': '/de-DE',
//     },
//   },
//   category: 'technology',
//   verification: {
//     google: 'google',
//     yandex: 'yandex',
//     yahoo: 'yahoo',
//     other: {
//       me: ['mmatynia@gmail.com'],
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

// const RootLayout: FC<BasicComponentProps> = ({
//   children,
// }): React.ReactElement => {
//   const lang = 'de-DE'

//   return (
//     <html
//       lang={lang}
//       className={`${roboto.className} ${roboto_slab.className}`}
//     >
//       <body>
//         <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
//       </body>
//     </html>
//   )
// }

// export default RootLayout
