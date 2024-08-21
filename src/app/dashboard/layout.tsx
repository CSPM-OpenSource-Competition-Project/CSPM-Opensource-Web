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
      <div className='flex h-full w-full flex-nowrap'>
        <div className='h-full w-[200px] flex-shrink-0'>
          <SideBar />
        </div>
        <div className='h-full flex-grow'>{children}</div>
      </div>
    </div>
  )
}
