import { Inter } from 'next/font/google'
import Header from '@/components/sidebar/header'
import SideBar from '@/components/sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full'>
          <Header />
        </div>
        <div className='grid h-screen w-full'>
          <main className='flex -space-y-28 space-x-60 whitespace-nowrap text-2xl'>
            <div>
              <SideBar />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
