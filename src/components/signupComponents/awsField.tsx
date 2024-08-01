'use client'

import InputLayout from '@/components/input/inputLayout'
import ReginSelect from '@/components/select/reginSelect'

import { useSingUpFeild } from '@/stores/useSignUpStore'

export default function AWSField() {
  const { setAccessKey, setSecretKey, setRegin } = useSingUpFeild()
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
        <ReginSelect setRegin={setRegin} />
        <button className='h-12 w-14 rounded-md bg-blue-900 text-white'>검증</button>
      </div>
      <span>사용 가능 합니다.</span>
      <span>권한 문제</span>
      <span>AccessKey, SecretKey을 다시 입력해주세요</span>
    </>
  )
}
