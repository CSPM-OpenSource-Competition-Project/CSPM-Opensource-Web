'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MainLogin() {
  const [inputEmail, setInputEmail] = useState('')

  const handleSubmit = () => {}

  return (
    <div>
      <Image src='/logo.png' width={500} height={500} alt='Logo' className='mb-4'></Image>
      <form onSubmit={handleSubmit} className='flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <input
            className='flex h-12 w-[400px] rounded-t-lg border-2 border-black px-1 text-xl'
            type='email'
            name='email'
            placeholder='email'
          ></input>
          <input
            className='flex h-12 w-[400px] rounded-b-lg border-x-2 border-b-2 border-black px-1 text-xl'
            type='password'
            name='password'
            placeholder='password'
          ></input>
        </div>
        <div className='flex justify-center space-x-4'>
          <Link href={'/login/search/id'}>아이디 찾기</Link>
          <span>|</span>
          <Link href='/login/search/password'>비밀번호 찾기</Link>
          <span>|</span>
          <Link href='/login/signup'>회원가입</Link>
        </div>
        <p className='flex justify-center'>
          <button type='submit' className='w-[400px] bg-gray-200 text-black'>
            회원가입
          </button>
        </p>
      </form>
    </div>
  )
}
