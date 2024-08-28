'use client'

import { useState } from 'react'
import InputLayout from '@/components/ui/inputLayout'
import { useRouter } from 'next/navigation'
import apiFetch from '@/utils/fetchWrapper'
import { encrypt } from '@/utils/crypto'

export default function IamInputComponents() {
  const [state, setState] = useState(0)
  const [inputNickName, setInputNickName] = useState('')
  const [inputAccessKey, setInputAccessKey] = useState('')
  const [inputSecretKey, setInputSecretKey] = useState('')
  const [inputRegion, setInputRegion] = useState('')
  const router = useRouter()

  // "검증" 버튼을 위한 GET 요청 처리 함수
  const handleValidation = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const enAccessKey = encrypt(inputAccessKey)
    const enSecreetKey = encrypt(inputSecretKey)
    const enRegion = encrypt(inputRegion)
    try {
      const [statusCode, data] = await apiFetch(
        '/api/iamsettings/validation/iam?accessKey=' +
          encodeURIComponent(enAccessKey) +
          '&secretKey=' +
          encodeURIComponent(enSecreetKey) +
          '&region=' +
          encodeURIComponent(enRegion),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (statusCode === 200) {
        console.log('검증 성공:', data)
        setState(1)
      } else if (statusCode === 403) {
        //권한
        setState(2)
      } else if (statusCode === 409) {
        //중복
        setState(3)
      } else {
        setState(4)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // "추가" 버튼을 위한 POST 요청 처리 함수
  const handleAdd = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const enAccessKey = encrypt(inputAccessKey)
    const enSecreetKey = encrypt(inputSecretKey)
    const enRigion = encrypt(inputRegion)

    try {
      const [statusCode, data] = await apiFetch('/api/iamsettings/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessKey: enAccessKey, // 키 이름을 CamelCase로 수정
          secretKey: enSecreetKey, // 키 이름을 CamelCase로 수정
          region: enRigion,
          nickName: inputNickName,
        }),
      })

      if (statusCode === 200) {
        console.log('데이터 추가 성공:', data)
        alert('IAM 추가 성공')
        router.push('/dashboard')
      } else {
        console.log('데이터 추가 실패:', statusCode)
        alert('IAM 추가 실패')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form className='ml-15 flex-col items-center justify-center'>
      <div className='ml-15 flex flex-row items-center justify-center gap-4 bg-white'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col space-y-2'>
            <span>Access Key</span>
            <InputLayout
              setType={'text'}
              setName={'set_accesskey'}
              setPlaceholder={'Access Key'}
              setCSS={'rounded text-xl'}
              setValue={setInputAccessKey}
            />
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <span>Secret Key</span>
          <InputLayout
            setType={'text'}
            setName={'set_secretkey'}
            setPlaceholder={'Secret Key'}
            setCSS={'rounded text-xl'}
            setValue={setInputSecretKey}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <span>Region</span>
          <InputLayout
            setType={'text'}
            setName={'set_region'}
            setPlaceholder={'Region'}
            setCSS={'rounded text-xl'}
            setValue={setInputRegion}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <span>Nick Name</span>
          <InputLayout
            setType={'text'}
            setName={'set_nickname'}
            setPlaceholder={'Name'}
            setCSS={'rounded text-xl'}
            setValue={setInputNickName}
          />
        </div>
      </div>

      <div className='ml-15 flex flex-row justify-center'>
        <p className='mt-4'>
          <button
            onClick={handleValidation}
            type='button'
            className='h-12 w-20 rounded-lg bg-blue-500 text-lg font-bold text-white'
          >
            검증
          </button>
        </p>
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
        <p className='ml-6 mt-4'>
          <button
            onClick={handleAdd}
            type='button'
            className='h-12 w-20 rounded-lg bg-blue-500 text-lg font-bold text-white'
          >
            추가
          </button>
        </p>
      </div>
    </form>
  )
}
