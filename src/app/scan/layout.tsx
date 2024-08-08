import { Inter } from 'next/font/google'
import Header from '@/components/sidebar/header'
import SideBar from '@/components/sidebar/sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col whitespace-nowrap text-2xl'>
      <div className='h-16 w-full'>
        <Header />
      </div>
      <div className='flex h-auto w-full'>
        <div className='w-[200px]'>
          <SideBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
