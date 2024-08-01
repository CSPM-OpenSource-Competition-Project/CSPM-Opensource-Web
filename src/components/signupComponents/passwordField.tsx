'use client'

import InputLayout from '@/components/input/inputLayout'
import { useSingUpFeild } from '@/stores/useSignUpStore'

export default function PassowrdField() {
  const { setPassword } = useSingUpFeild()
  return (
    <>
      <label className='text-xl'>비밀번호</label>
      <InputLayout
        setType={'password'}
        setName={'set_password'}
        setPlaceholder={'비밀번호 입력'}
        setCSS={'rounded-md'}
        setValue={setPassword}
      />
    </>
  )
}
