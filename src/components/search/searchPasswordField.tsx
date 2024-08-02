'use client'
import ToLoginButton from '@/components/button/toLoginButton'
import InputLayout from '@/components/input/inputLayout'
import Logo from '@/components/logo'
import { useState } from 'react'

export default function SearchPasswordField() {
  const [state, setState] = useState(0)
  const [secretKey, setSecretKey] = useState('')
  const password = 'password'
  return (
    <main>
      <Logo />
      <form>
        <h1 className='mt-6 text-2xl'>비밀번호 찾기</h1>
        <span className='mt-10 text-lg'>이메일 입력</span>

        <div className='flex gap-4'>
          <InputLayout
            setType={'email'}
            setName={'email'}
            setPlaceholder={'이메일 입력'}
            setCSS={'rounded-md'}
            setValue={setSecretKey}
          />
          <button
            type='submit'
            className='font-blod h-12 w-16 rounded-lg bg-blue-900 text-lg font-bold text-white'
          >
            확인
          </button>
        </div>

        <p className='h-8'>
          <span className={`${state === 1 ? '' : 'hidden'} text-bold`}>
            아이디는 {password} 입니다.
          </span>
          <span className={`${state === 2 ? '' : 'hidden'} font-bold text-red-500`}>
            가입한 이력이 없습니다.
          </span>
        </p>
      </form>
      <ToLoginButton />
    </main>
  )
}
