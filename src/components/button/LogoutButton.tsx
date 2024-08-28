'use client'
import Logout from '@image/icons/logout.svg'

export default function LogoutButton() {
  const handleRemove = async () => {
    const accessToken = localStorage.getItem('access')

    try {
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access: accessToken ? `${accessToken}` : '',
        },
        credentials: 'include',
      })
      if (response.ok) {
        console.log('로그아웃 성공')
        localStorage.removeItem('access')
      } else {
        console.log('로그아웃 실패')
      }
    } catch (e) {}
  }

  return (
    <button className='flex h-8 w-auto items-center gap-2' onClick={handleRemove}>
      로그아웃
      <Logout className='h-6 w-6' />
    </button>
  )
}
