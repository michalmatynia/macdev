// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'

// export const cookieReader = () => {
//   const headers = { 'Accept-Language': 'en-US,en;q=0.5' }
//   //   eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
//   const languages = new Negotiator(headers).languages()
//   const locales = ['en-US', 'pl-PL', 'nl']
//   const defaultLocale = 'en-US'

//   //   eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
//   const matcher = match(languages, locales, defaultLocale) // -> 'en-US'
//   console.log(languages)
//   return matcher
// }
