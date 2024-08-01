import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Link href='/'>
        <Image src='/logo1.png' width={300} height={200} alt='Logo' className='mb-4'></Image>
      </Link>
    </div>
  )
}
