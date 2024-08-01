'use client'

import { useState } from 'react'
import EmailInput from '@/components/input/emailInput'
import PasswordInput from '@/components/input/passwordInput'
import Logo from '@/components/logo'
import LoginLink from '@/components/loginComponents/loginLink'

export default function MainLogin() {
  const [inputEmail, setInputEmail] = useState('')
  const [loginResult, setLoginResult] = useState(0)

  const handleSubmit = () => {}

  return (
    <div>
      <Logo />
      <form onSubmit={handleSubmit} className='mt-6 flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <EmailInput />
          <PasswordInput />
        </div>
        <p className='mt-4 flex justify-center'>
          <button
            type='submit'
            className='font-blod h-12 w-[300px] rounded-lg bg-sky-500 text-lg font-bold text-white'
          >
            로그인
          </button>
        </p>
      </form>
      <p className='mt-4 flex justify-center space-x-4'>
        <LoginLink />
      </p>
      <p className='mt-4 flex justify-center text-red-500'>
        <span className={`${loginResult == 1 ? '' : 'hidden'} text-base`}>
          아이디 또는 비밀번호가 잘못 되었습니다.
        </span>
        <span className={`${loginResult == 2 ? '' : 'hidden'} text-base`}>
          아이디와 비밀번호를 정확히 입력해 주세요.
        </span>
      </p>
    </div>
  )
}
