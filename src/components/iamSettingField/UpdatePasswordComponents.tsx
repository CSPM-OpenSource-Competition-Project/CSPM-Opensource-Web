'use client'

import { useState } from 'react'
import apiFetch from '@/utils/fetchWrapper'
import InputLayout from '@/components/ui/inputLayout'
import { useRouter } from 'next/navigation'
import Identity from '@image/icons/identity.svg'

export default function UpdatePasswordComponents() {
  const [state, setState] = useState(0)
  const [inputPassword, setInputPassword] = useState('')
  const [inputSecondPassword, setInputSecondPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (inputPassword !== inputSecondPassword) {
      console.error('비밀번호가 일치하지 않습니다.')
      setState(3)
      setTimeout(() => {
        setState(0)
      }, 2000)
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
        setState(1)
        setInputPassword('')
        setInputSecondPassword('')
        setTimeout(() => {
          setState(0)
        }, 2000)
      }
    } catch (e) {
      console.error('비밀번호 변경 중 오류 발생:', e)
      setState(2)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='h-[350px] flex-col items-center justify-center rounded-md bg-white p-4 shadow-lg'
    >
      <div className='flex gap-1'>
        <Identity className='h-7 w-7' />
        <span className='h-12 w-full text-xl'>비밀번호 변경하기</span>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 bg-white'>
        <div className='flex flex-col'>
          <span>변경할 비밀번호 입력</span>
          <InputLayout
            setType={'password'}
            setName={'set_password'}
            setPlaceholder={'비밀번호'}
            setCSS={'rounded text-xl'}
            setValue={setInputPassword}
          />
        </div>
        <div className='flex flex-col'>
          <span>2차 확인용</span>
          <InputLayout
            setType={'password'}
            setName={'set_secondpassword'}
            setPlaceholder={'2차 확인 비밀번호'}
            setCSS={'rounded text-xl'}
            setValue={setInputSecondPassword}
          />
        </div>
      </div>
      <div className='mt-4 flex flex-col items-center justify-center'>
        <button
          type='submit'
          className='h-12 w-20 rounded-md border border-gray-300 px-2 text-lg text-black shadow hover:bg-gray-500'
        >
          변경
        </button>
        <p className='mt-4'>
          <span className={`${state === 1 ? '' : 'hidden'}`}>변경을 성공했습니다.</span>
          <span className={`${state === 2 ? '' : 'hidden'} text-red-500`}>
            변경을 실패했습니다.
          </span>
          <span className={`${state === 3 ? '' : 'hidden'} text-red-500`}>
            두 입력한 비밀번호가 일치하지 않습니다.
          </span>
        </p>
      </div>
    </form>
  )
}
