'use client'
import InputLayout from '@/components/input/inputLayout'
import { encrypt } from '@/utils/crypto'
import { useState } from 'react'

export default function SearchIdFrom() {
  const [accessKey, setAccessKey] = useState('')
  const [state, setState] = useState(0)
  const [searchEmail, setSearchEmail] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/account/id/' + encrypt(accessKey), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        const data = await response.json()
        setSearchEmail(data.email)
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
      <form className='mt-2 flex gap-4' onSubmit={handleSubmit}>
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
      </form>

      <p className='mt-4 h-8'>
        <span className={`${state === 1 ? '' : 'hidden'} text-bold`}>
          아이디는 {searchEmail} 입니다.
        </span>
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
