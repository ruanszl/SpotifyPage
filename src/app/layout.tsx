import { ReactNode } from 'react'
import './globals.css'

import { Roboto } from "next/font/google"

export const metadata = {
  title: 'Spotify',
  description: 'Copia pagina inicial Spotify com Tailwind',
}

const roboto = Roboto({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({children,}: {
  children: ReactNode
}) {
  
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-zinc-950/95 bg-app bg-no-repeat bg-cover h-screen bg-center">
        {children}
      </body>
    </html>
  )
}
