import 'server-only'
import './globals.css'
import {GABody} from '../utils/Google/analytics/google-analytics'
import type { Metadata } from 'next'
import Footer from './footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Lato ,Paytone_One } from 'next/font/google'

config.autoAddCss = false
library.add(fas, faFontAwesome)

export const metadata: Metadata = {
   title: {
    default: 'CCFIL',
    template: '%s | CCFIL',
  },
}

const paytoneOne = Paytone_One({
  weight: '400',
  style: 'normal',
  subsets: ["latin","latin-ext"],
  variable: '--font-PaytoneOne',
  display: 'swap'
})

const latoLite = Lato({
  weight: ['100','300','400','700','900'],
  style: 'normal',
  subsets: ["latin","latin-ext"],
  variable: '--font-Lato',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${paytoneOne.variable} ${latoLite.variable}`}>
      <body className="mx-auto no-scrollbar max-w-screen overflow-y-auto">
        <GABody/>
        <main className={`flex flex-col mx-auto min-h-screen snap-y`}>
        
              {children}
              
            </main>
            <Footer/>
            </body>
    </html>
  )
}
