import { Inter, Roboto, Roboto_Slab } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_slab = Roboto_Slab({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
/* For Issues Regarding Material Icons */
// <link
// rel="stylesheet"
// href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=optional"
// />
// <link
// href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
// rel="stylesheet"
// />
// <link
// href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=optional"
// rel="stylesheet"
// />

// import localFont from 'next/font/local';

// // Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: './my-font.woff2',
//   display: 'swap'
// });

// export default function RootLayout({ children }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={myFont.className}>
//       <body>{children}</body>
//     </html>
//   );
// }
