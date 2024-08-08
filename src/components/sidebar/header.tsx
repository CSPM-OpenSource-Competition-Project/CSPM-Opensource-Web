import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='fixed z-50 flex h-20 w-full items-center bg-[#eef2f8] px-4'>
      <Link href='/'>
        <Image src='/logo1.png' width={200} height={160} alt='Logo' className=''></Image>
      </Link>
      {/* <div className='cursor-pointer text-[30px] font-bold text-blue-900'>OpenSourceCSPM</div> */}
    </div>
  )
}
