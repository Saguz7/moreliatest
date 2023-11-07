import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fetch from 'node-fetch';
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Morelia - VUM',
  description: 'Gobierno de Michoacan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
       
       
      <body className={inter.className}>{children}</body>
    </html>
  )
}