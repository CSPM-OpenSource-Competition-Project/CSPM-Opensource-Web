'use client'
import Header from '@/app/components/sidebar/header'
import SideBar from '@/app/components/sidebar/sidebar'

export default function Scan() {
  return (
    <main className='lt-4 flex h-full min-h-screen w-full flex-col items-center justify-start p-3'>
      스캔 페이지
      <div className='App'>
        {/* <Header /> */}

        <div className='container'>
          <SideBar />
        </div>
      </div>
    </main>
  )
}
