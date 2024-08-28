'use client'

import InputLayout from '@/components/ui/inputLayout'
import { useState } from 'react'

export default function SearchPwdFrom() {
  const [state, setState] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/account/password/' + email + '/' + password, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        const data = await response.json()
        setState(1)
      } else {
        setState(2)
      }
    } catch (e) {
      setState(3)
    }
  }
  return (
    <div>
      <form className='mt-2 flex-col' onSubmit={handleSubmit}>
        <InputLayout
          setType={'email'}
          setName={'email'}
          setPlaceholder={'이메일 입력'}
          setCSS={'rounded-md'}
          setValue={setEmail}
        />

        <div className='mt-4 flex gap-4'>
          <InputLayout
            setType={'password'}
            setName={'set_password'}
            setPlaceholder={'비밀번호 입력'}
            setCSS={'rounded-md'}
            setValue={setPassword}
          />
          <button
            type='submit'
            className='font-blod h-12 w-16 rounded-lg bg-blue-900 text-lg font-bold text-white'
          >
            확인
          </button>
        </div>
      </form>

      <p className='mt-4 h-8'>
        <span className={`${state === 1 ? '' : 'hidden'} text-bold`}>비밀번호 변경 성공</span>
        <span className={`${state === 2 ? '' : 'hidden'} font-bold text-red-500`}>
          가입한 이력이 없습니다.
        </span>
        <span className={`${state === 3 ? '' : 'hidden'} font-bold text-red-500`}>
          서버와 통신할 수 없습니다.
        </span>
      </p>
    </div>
  )
}
