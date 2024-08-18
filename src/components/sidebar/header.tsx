import Link from 'next/link'
import Image from 'next/image'
import Logout from '@image/icons/logout.svg'
export default function Header() {
  return (
    <div className='fixed z-50 flex h-20 w-full items-center justify-between bg-[#eef2f8] px-4'>
      <Link href='/dashboard'>
        <Image src='/logo1.png' width={200} height={160} alt='Logo'></Image>
      </Link>
      <button className='flex h-8 w-auto items-center gap-2'>
        로그아웃
        <Logout className='h-6 w-6' />
      </button>
    </div>
  )
}
