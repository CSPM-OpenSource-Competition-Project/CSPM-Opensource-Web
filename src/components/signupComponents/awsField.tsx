'use client'

import InputLayout from '@/components/input/inputLayout'
import ReginSelect from '@/components/select/reginSelect'

import { useSingUpFeild } from '@/stores/useSignUpStore'
import { encrypt } from '@/utils/crypto'
import { useState } from 'react'

export default function AWSField() {
  const [state, setState] = useState(0)
  const {
    setAccessKey,
    setSecretKey,
    setRegion,
    accessKey,
    secretKey,
    region,
    setAccountId,
    setUserName,
  } = useSingUpFeild()
  const handleInfo = async () => {
    try {
      const response = await fetch(
        '/api/account/validation/iam?accessKey=' +
          encrypt(accessKey) +
          '&secretKey=' +
          encrypt(secretKey) +
          '&region=' +
          encrypt(region),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
        },
      )

      if (response.status === 200) {
        const data = await response.json()
        setAccountId(data.accountId)
        setUserName(data.userName)
        setState(1)
      } else if (response.status === 403) {
        setState(2)
      } else if (response.status === 409) {
        setState(4)
      } else {
        setState(3)
      }
    } catch (e) {
      console.error(e)
    }
  }

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
        <ReginSelect setRegin={setRegion} regin={region} />
        <button className='h-12 w-14 rounded-md bg-blue-900 text-white' onClick={handleInfo}>
          검증
        </button>
      </div>
      <p className='h-8'>
        <span className={`${state === 1 ? '' : 'hidden'}`}>사용 가능 합니다.</span>
        <span className={`${state === 2 ? '' : 'hidden'} text-red-500`}>
          권한 문제 : AWS IAM 권한을 넣어주세요
        </span>
        <span className={`${state === 3 ? '' : 'hidden'} text-red-500`}>
          오타 : AccessKey, SecretKey을 다시 입력해주세요
        </span>
        <span className={`${state === 4 ? '' : 'hidden'} text-red-500`}>
          중복 : AccessKey, SecretKey가 중복됩니다.
        </span>
      </p>
    </>
  )
}
