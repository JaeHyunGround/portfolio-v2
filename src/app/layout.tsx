import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
import '../styles/reset.css'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: 'REX | 안재현',
  description: 'Frontend 개발자 안재현의 웹 포트폴리오입니다.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  )
}
