'use client'

import InputLayout from '@/components/input/inputLayout'
import { useSingUpFeild } from '@/stores/useSignUpStore'

export default function EmailField() {
  const { email, setEmail, setEmailVaildator } = useSingUpFeild()

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
        <button className='h-12 w-14 rounded-md bg-blue-900 text-white'>검증</button>
      </div>
      <div className='flex gap-4'>
        <InputLayout
          setType={'number'}
          setName={'set_number'}
          setPlaceholder={'인증 번호 입력'}
          setCSS={'rounded-md'}
          setValue={setEmailVaildator}
        />

        <button className='h-12 w-14 rounded-md bg-blue-900 text-white'>확인</button>
      </div>
      <span>사용 가능 합니다.</span>
      <span>사용할 수 없습니다.</span>
    </>
  )
}
