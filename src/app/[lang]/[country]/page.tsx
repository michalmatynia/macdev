// 'use client'

// import LocaleSwitcher from '../../components/LocaleSwitcher'
// import PageLayout from '../../components/PageLayout'
// // import { useEffect } from 'react'
// // import { useRouter } from 'next/navigation'
// import { useTranslations } from 'next-intl'

// export default function RootPage() {
//   const t = useTranslations('Index')
//   // return (
//   //   <PageLayout title={t('title')}>
//   //     <p>{t('description')}</p>
//   //     <LocaleSwitcher />
//   //   </PageLayout>
//   // )

//   return <div>cds</div>
//   //   const router = useRouter()
//   //   useEffect(() => {
//   //     function reRoute() {
//   //       router.push('/front')
//   //     }
//   //     try {
//   //       reRoute()
//   //     } catch (error) {
//   //       console.error(error)
//   //     }
//   //   }, [router])
// }

/// -- Try 2
// 'use client'

// import { useTranslations } from 'next-intl'

// export default function Index() {
//   const t = useTranslations('Index')
//   return <h1>{t('title')}</h1>
// }

// --- Try 3
// export default function Home({
//   params,
// }: {
//   params: { lang: string; country: string }
// }) {
//   return <h1>{JSON.stringify(params)}</h1>
// }
// ----Tey4

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

import {
  getLocalePartsFrom,
  locales,
  ValidLocale,
  getTranslator,
} from '../../../i18n'

export function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }))
}

export default async function Home({
  params,
}: {
  params: { lang: string; country: string }
}) {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}` as ValidLocale // our middleware ensures this is valid
  )
  return (
    <div>
      <h1>{translate('welcome.helloWorld')}</h1>
      <h2>
        {translate('welcome.happyYear', {
          year: new Date().getFullYear(),
        })}
      </h2>
    </div>
  )
}
