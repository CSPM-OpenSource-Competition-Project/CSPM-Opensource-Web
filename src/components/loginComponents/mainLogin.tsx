'use client'

import { useState } from 'react'
import Logo from '@/components/logo'
import LoginLink from '@/components/loginComponents/loginLink'

import { useRouter } from 'next/navigation'
import InputLayout from '@/components/ui/inputLayout'
import { ALL } from 'dns'

export default function MainLogin() {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [loginResult, setLoginResult] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('username', inputEmail)
    formData.append('password', inputPassword)

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const authorization = response.headers.get('Authorization')
        const refreshToken = response.headers.get('Refresh-Token')

        if (authorization) {
          localStorage.setItem('authorization', authorization)
        } else {
          console.warn('Authorization header is missing')
        }
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken)
        } else {
          console.warn('refreshToken header is missing')
        }
        router.push('/dashboard')
      } else {
        setLoginResult(true)
      }
    } catch (e) {
      console.error('에러 : ' + e)
    }
  }

  return (
    <div>
      <Logo />
      <form onSubmit={handleSubmit} className='mt-6 flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <InputLayout
            setType={'email'}
            setName={'set_email'}
            setPlaceholder={'Email'}
            setCSS={'rounded-t-md text-xl'}
            setValue={setInputEmail}
          />

          <InputLayout
            setType={'password'}
            setName={'set_password'}
            setPlaceholder={'Password'}
            setCSS={'rounded-b-md text-xl'}
            setValue={setInputPassword}
          />
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
        <span className={`${loginResult ? '' : 'hidden'} text-base text-red-500`}>
          아이디 또는 비밀번호가 잘못되었습니다.
        </span>
      </p>
    </div>
  )
}
