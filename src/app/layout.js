import './globals.css'

export const metadata = {
  title: 'Soho Garden Cafe',
  description: "Indulge in the flavors of Soho garden café, where every dish is a work of art",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
