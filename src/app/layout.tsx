import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Yorman — Asistente IA + Editor de Video',
  description: 'Portfolio de edición de video profesional. Especializado en reels, shorts y contenido de video corto con IA.',
  openGraph: {
    title: 'Yorman — Asistente IA + Editor de Video',
    description: 'Portfolio de edición de video profesional. Especializado en reels, shorts y contenido de video corto con IA.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-light text-dark font-body antialiased">
        {children}
      </body>
    </html>
  )
}
