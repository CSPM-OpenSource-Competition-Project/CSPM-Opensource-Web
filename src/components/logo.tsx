import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='mb-4 flex justify-center'>
      <Link href='/'>
        <Image src='/logo1.png' width={300} height={200} alt='Logo'></Image>
      </Link>
    </div>
  )
}
