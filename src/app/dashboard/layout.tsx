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
          {/* 자식 컴포넌트가 차지할 공간을 설정합니다 */}
          <SideBar />
        </div>
        <div className='h-full flex-grow'>
          {/* 자식 컴포넌트가 차지할 공간을 설정합니다 */}
          {children}
        </div>
      </div>
    </div>
  )
}
