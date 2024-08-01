'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EmailInput from '@/app/components/input/emailInput'
import PasswordInput from '@/app/components/input/passwordInput'

export default function MainLogin() {
  const [inputEmail, setInputEmail] = useState('')
  const [loginResult, setLoginResult] = useState(0)

  const handleSubmit = () => {}

  return (
    <div>
      <Image src='/logo.png' width={500} height={500} alt='Logo' className='mb-4'></Image>
      <form onSubmit={handleSubmit} className='flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <EmailInput />
          <PasswordInput />
        </div>
        <p className='mt-4 flex justify-center'>
          <button
            type='submit'
            className='font-blod h-12 w-[400px] rounded-lg bg-orange-400 text-lg text-white'
          >
            로그인
          </button>
        </p>
      </form>
      <p className='mt-4 flex justify-center space-x-4'>
        <Link href={'/login/search/id'}>아이디 찾기</Link>
        <span>|</span>
        <Link href='/login/search/password'>비밀번호 찾기</Link>
        <span>|</span>
        <Link href='/login/signup'>회원가입</Link>
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
