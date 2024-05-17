import 'server-only'
import './globals.css'
import {GABody} from '../utils/Google/analytics/google-analytics'
import Footer from '../components/footer/footer'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Lato ,Paytone_One, Proza_Libre } from 'next/font/google'
import ConfigureAmplifyClientSide from '@/components/ConfigureAmplifyClientSide';
config.autoAddCss = false
library.add(fas, faFontAwesome)

export const metadata = {
   title: {
    default: "CCFIL",
    template: "%s | CCFIL",
  },
  description: {
    default: "Learn More About CCFIL",
  },
}

const paytoneOne = Paytone_One({
  weight: '400',
  style: 'normal',
  subsets: ["latin","latin-ext"],
  variable: '--font-PaytoneOne',
  display: 'swap'
})

const prozaLibre = Proza_Libre({
  weight: ['400','500','600','700','800'],
  style: 'normal',
  subsets: ["latin","latin-ext"],
  variable: '--font-ProzaLibre',
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
    <html lang="en" className={`${paytoneOne.variable} ${latoLite.variable} ${prozaLibre.variable}`}>
      <link rel="icon" href="/Icons/favicon.png" />
      <body className="mx-auto no-scrollbar">
        <ConfigureAmplifyClientSide/>
        <GABody/>
        <main className={`flex flex-col mx-auto min-h-screen`}>
        
              {children}
            </main>
            <Footer/>
            </body>
    </html>
  )
}
