'use client'

import { useState } from 'react'
import InputLayout from '@/components/ui/inputLayout'
import { useRouter } from 'next/navigation'
import apiFetch from '@/utils/fetchWrapper'

export default function IamInputComponents() {
  const [inputAccessKey, setInputAccessKey] = useState('')
  const [inputSecretKey, setInputSecretKey] = useState('')
  const [inputRegion, setInputRegion] = useState('')
  const router = useRouter()

  // "검증" 버튼을 위한 GET 요청 처리 함수
  const handleValidation = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    try {
      const [statusCode, data] = await apiFetch('/api/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (statusCode === 200) {
        console.log('검증 성공:', data)
      } else {
        console.log('검증 실패:', statusCode)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // "추가" 버튼을 위한 POST 요청 처리 함수
  const handleAdd = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('accesskey', inputAccessKey)
    formData.append('secretkey', inputSecretKey)
    formData.append('region', inputRegion)

    try {
      const [statusCode, data] = await apiFetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accesskey: inputAccessKey,
          secretkey: inputSecretKey,
          region: inputRegion,
        }),
      })
      if (statusCode === 200) {
        console.log('데이터 추가 성공:', data)
      } else {
        console.log('데이터 추가 실패:', statusCode)
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
