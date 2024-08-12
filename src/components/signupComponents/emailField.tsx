'use client'

import InputLayout from '@/components/ui/inputLayout'
import { useSingUpFeild } from '@/stores/useSignUpStore'
import { encrypt } from '@/utils/crypto'
import { useState } from 'react'

export default function EmailField() {
  const [state, setState] = useState(0)
  const [verificationCode, setVerificationCode] = useState('')
  const [emailVerificationCode, setEmailVerificationCode] = useState('')
  const { email, setEmail, setEmailVaildator } = useSingUpFeild()

  const handleValid = async () => {
    setState(3)
    try {
      const response = await fetch('/api/account/validation/email?email=' + email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        const data = await response.json()
        setVerificationCode(data.verificationCode)
      }
      if (response.status === 409) {
        setState(4)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleValidCode = () => {
    if (verificationCode === emailVerificationCode) {
      setState(1)
      setEmailVaildator(true)
    } else {
      setState(2)
      setEmailVaildator(false)
    }
  }

  return (
    <>
      <label className='text-xl'>Email</label>
      <div className='flex gap-4'>
        <InputLayout
          setType={'email'}
          setName={'set_email'}
          setPlaceholder={'이메일 입력'}
          setCSS={'rounded-md'}
          setValue={setEmail}
        />
        <button onClick={handleValid} className='h-12 w-14 rounded-md bg-blue-900 text-white'>
          검증
        </button>
      </div>
      <div className='flex gap-4'>
        <InputLayout
          setType={'number'}
          setName={'set_number'}
          setPlaceholder={'인증 번호 입력'}
          setCSS={'rounded-md'}
          setValue={setEmailVerificationCode}
        />

        <button onClick={handleValidCode} className='h-12 w-14 rounded-md bg-blue-900 text-white'>
          확인
        </button>
      </div>
      <p className='h-8'>
        <span className={`${state === 1 ? '' : 'hidden'} `}>사용 가능 합니다.</span>
        <span className={`${state === 2 ? '' : 'hidden'} text-red-500`}>검증에 실패했습니다.</span>
        <span className={`${state === 3 ? '' : 'hidden'} `}>인증 번호 입력해주세요.</span>
        <span className={`${state === 4 ? '' : 'hidden'} text-red-500`}>
          이메일이 중복되었습니다.
        </span>
      </p>
    </>
  )
}
