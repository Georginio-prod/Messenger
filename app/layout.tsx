import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterContext from "@/app/context/ToasterContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chatbox',
  description: 'Chatbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToasterContext/>
      {children}
      </body>
    </html>
  )
}
