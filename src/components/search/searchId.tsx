'use client'
import ToLoginButton from '@/components/button/toLoginButton'
import InputLayout from '@/components/input/inputLayout'
import Logo from '@/components/logo'
import { useState } from 'react'

export default function SearchIdField() {
  const [accessKey, setAccessKey] = useState('')
  const [state, setState] = useState(0)
  return (
    <main>
      <Logo />
      <form>
        <span className='mt-6 text-xl'>AccessKey 입력</span>

        <div className='flex gap-4'>
          <InputLayout
            setType={'text'}
            setName={'accessKey'}
            setPlaceholder={'대표 accessKey 입력'}
            setCSS={'rounded-md'}
            setValue={setAccessKey}
          />
          <button
            type='submit'
            className='font-blod h-12 w-16 rounded-lg bg-blue-900 text-lg font-bold text-white'
          >
            확인
          </button>
        </div>

        <p className='h-8'>
          <span className={`${state === 1 ? '' : 'hidden'}`}>아이디는 ~~ 입니다.</span>
          <span className={`${state === 2 ? '' : 'hidden'}`}>가입한 이력이 없습니다.</span>
        </p>
      </form>
      <ToLoginButton />
    </main>
  )
}
