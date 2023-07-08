import './globals.css'
import { Mulish } from 'next/font/google'


const inter = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'Soho Garden Cafe',
  description: "Indulge in the flavors of Soho garden café, where every dish is a work of art",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
