'use client'

import { useState } from 'react'
import apiFetch from '@/utils/fetchWrapper'
import InputLayout from '@/components/ui/inputLayout'
import { useRouter } from 'next/navigation'

export default function UpdatePasswordComponents() {
  const [inputPassword, setInputPassword] = useState('')
  const [inputSecondPassword, setInputSecondPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (inputPassword !== inputSecondPassword) {
      console.error('비밀번호가 일치하지 않습니다.')
      alert('비밀번호가 일치 하지 않습니다.')
      return
    }

    try {
      const [statusCode, data] = await apiFetch(`/api/iamsettings/password/${inputPassword}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (statusCode === 200) {
        console.log('비밀번호가 성공적으로 변경되었습니다:', data)
        alert('비밀번호가 변경되었습니다.')
        router.push('/dashboard')
      }
    } catch (e) {
      console.error('비밀번호 변경 중 오류 발생:', e)
      alert('비밀번호 변경에 실패했습니다.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='ml-15 flex-col items-center justify-center'>
      <div className='ml-15 flex flex-col items-center justify-center gap-2 bg-white'>
        <InputLayout
          setType={'password'}
          setName={'set_password'}
          setPlaceholder={'비밀번호'}
          setCSS={'rounded text-xl'}
          setValue={setInputPassword}
        />

        <InputLayout
          setType={'password'}
          setName={'set_secondpassword'}
          setPlaceholder={'2차 확인 비밀번호'}
          setCSS={'rounded text-xl'}
          setValue={setInputSecondPassword}
        />
      </div>
      <div className='ml-15 flex flex-row justify-center'>
        <p className='mt-4'>
          <button
            type='submit'
            className='h-12 w-20 rounded-lg bg-blue-500 text-lg font-bold text-white'
          >
            변경
          </button>
        </p>
      </div>
    </form>
  )
}
