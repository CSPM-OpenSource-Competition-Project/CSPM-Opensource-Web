import Header from '@/components/sidebar/header'
import SideBar from '@/components/sidebar/sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className='h-20 w-full'>
        <Header />
      </div>
      <div className='flex h-full w-full'>
        <div className='w-[200px]'>
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  )
}
