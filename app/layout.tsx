import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'MOTIONA JS PT - 재활 이후의 시간을 함께',
  description: '재활 이후의 시간을 혼자 넘기지 않아도 되는 곳, MOTIONA JS PT 센터',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
