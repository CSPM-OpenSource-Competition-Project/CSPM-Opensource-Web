import Link from 'next/link'

export default function ToLoginButton() {
  return (
    <Link href={'/'} className='flex justify-center'>
      <button
        type='button'
        className='font-blod mt-1 h-12 w-[380px] rounded-lg bg-sky-500 text-lg font-bold text-white'
      >
        로그인
      </button>
    </Link>
  )
}
