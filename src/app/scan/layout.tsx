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
        <div className='grid h-screen w-full grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto]'>
          <header className='h-12 w-full'>
            <Header />
          </header>

          <main className='flex space-x-10 whitespace-nowrap text-2xl'>
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
