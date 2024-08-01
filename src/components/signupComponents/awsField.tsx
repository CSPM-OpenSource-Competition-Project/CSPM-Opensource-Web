'use client'

import InputLayout from '@/components/input/inputLayout'
import ReginSelect from '@/components/select/reginSelect'

import { useSingUpFeild } from '@/stores/useSignUpStore'
import { useState } from 'react'

export default function AWSField() {
  const [state, setState] = useState(0)
  const { setAccessKey, setSecretKey, setRegin, regin } = useSingUpFeild()
  return (
    <>
      <label className='text-xl'>AWS 대표 IAM</label>
      <InputLayout
        setValue={setAccessKey}
        setType={'text'}
        setName={'set_text'}
        setPlaceholder={'AccessKey 입력'}
        setCSS={'rounded-md'}
      />
      <InputLayout
        setValue={setSecretKey}
        setType={'text'}
        setName={'set_text'}
        setPlaceholder={'SecretKey 입력'}
        setCSS={'rounded-md'}
      />

      <div className='flex gap-4'>
        <ReginSelect setRegin={setRegin} regin={regin} />
        <button className='h-12 w-14 rounded-md bg-blue-900 text-white'>검증</button>
      </div>
      <p>
        <span className={`${state === 1 ? '' : 'hidden'}`}>사용 가능 합니다.</span>
        <span className={`${state === 2 ? '' : 'hidden'} text-red-500`}>
          권한 문제 : AWS IAM 권한을 넣어주세요
        </span>
        <span className={`${state === 3 ? '' : 'hidden'} text-red-500`}>
          오타 : AccessKey, SecretKey을 다시 입력해주세요
        </span>
      </p>
    </>
  )
}
