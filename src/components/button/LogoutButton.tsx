'use client'
import Logout from '@image/icons/logout.svg'

export default function LogoutButton() {
  const handleRemove = () => {
    localStorage.removeItem('authorization')
    localStorage.removeItem('refreshToken')
  }

  return (
    <button className='flex h-8 w-auto items-center gap-2' onClick={handleRemove}>
      로그아웃
      <Logout className='h-6 w-6' />
    </button>
  )
}
