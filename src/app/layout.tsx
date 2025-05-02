import IncomeProvider from '@/features/income/IncomeProvider'
import ReduxProvider from '@/shared/model/store/Provider'
import { AsideHeader, TopHeader } from '@/widgets'
import Footer from '@/widgets/Footer/Footer'
import localFont from 'next/font/local'
import './globals.css'
import './variables.scss'
export const SF = localFont({
  src: [
    {
      path: './fonts/SFProText-Light.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
})
export const Accid = localFont({
  src: [
    {
      path: './fonts/accid.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={` ${SF.className}`}>
        <ReduxProvider>
          <>
            <IncomeProvider />

            <TopHeader />
            <AsideHeader />
            <main>{children}</main>
            <Footer />
          </>
        </ReduxProvider>
      </body>
    </html>
  )
}
