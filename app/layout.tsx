import 'server-only'
import './globals.css'
import {GABody} from '../utils/Google/analytics/google-analytics'
import type { Metadata } from 'next'
import Footer from './footer'
import Nav from '@/components/nav'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(fas, faFontAwesome)

export const metadata: Metadata = {
   title: {
    default: 'CCFIL',
    template: '%s | CCFIL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative mx-auto no-scrollbar">
        <GABody/>
        <Nav><></></Nav>
        <main className={` mx-auto min-h-screen w-full snap-y`}>
              {children}
            </main>
            <Footer/>
            </body>
    </html>
  )
}
