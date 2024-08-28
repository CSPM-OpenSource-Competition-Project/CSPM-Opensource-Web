import Link from 'next/link'
import Image from 'next/image'
import LogoutButton from '@/components/button/LogoutButton'

export default function Header() {
  return (
    <div className='fixed z-50 flex h-20 w-full items-center justify-between px-4'>
      <Link href='/dashboard'>
        <Image src='/logo1.png' width={200} height={160} alt='Logo'></Image>
      </Link>
      <Link href='/'>
        <LogoutButton />
      </Link>
    </div>
  )
}
