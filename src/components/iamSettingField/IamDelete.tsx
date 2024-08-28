'use client'

import React, { useState, useEffect } from 'react'
import Pen from '@image/icons/pen.svg'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import apiFetch from '@/utils/fetchWrapper'
import { useRouter } from 'next/navigation'
import { useSettingTrigger } from '@/stores/settingFetchTrigger'

interface IAMSelectBoxProps {
  onSelect: (value: string) => void
}

function IAMSelectBox({ onSelect }: IAMSelectBoxProps) {
  const [iamOptions, setIamOptions] = useState<string[]>([])
  const { fetchTrigger } = useSettingTrigger()
  console.log()
  const selectIamName = async () => {
    try {
      const [statusCode, data] = await apiFetch('/resource/iam-scanGroup', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (statusCode === 200) {
        console.log('Fetched IAM Data:', data)

        const iamData = Array.isArray(data) ? data : data?.iamList || []
        if (Array.isArray(iamData) && iamData.every((item) => typeof item === 'string')) {
          setIamOptions(iamData)
        } else {
          console.error('Fetched data is not a valid string array:', iamData)
        }
      }
    } catch (error) {
      console.error('Error fetching IAM resources:', error)
    }
  }

  useEffect(() => {
    selectIamName()
  }, [, fetchTrigger])

  const defaultIam = 'default'
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className='w-[400px] border border-[#B0B3B8]'>
        <SelectValue placeholder='IAM 선택' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {iamOptions.map((iam) => (
            <SelectItem key={iam} value={iam} disabled={iam === defaultIam}>
              {iam}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default function IamDelete() {
  const [resultState, seResultState] = useState(0)
  const [nickname, setNickname] = useState('default')
  const { setFetchTrigger } = useSettingTrigger()

  const handleDelete = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('선택된 IAM:', nickname)
    if (!nickname) {
      alert('삭제할 IAM을 선택하세요.')
      return
    }
    try {
      const [statusCode, data] = await apiFetch(`/api/iamsettings`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ nickname }]),
      })
      if (statusCode === 200) {
        console.log('삭제 성공:', data)
        setNickname('default')
        setFetchTrigger()
      } else {
        console.log('삭제 실패:', statusCode)
        alert('IAM 삭제 실패')
      }
    } catch (e) {
      console.error('삭제 중 오류 발생:', e)
      alert('삭제 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className='flex flex-col gap-4 rounded-md bg-white p-4 shadow-lg'>
      <div className='flex gap-1'>
        <Pen className='h-7 w-7' />
        <span className='h-12 w-full text-xl'>IAM 삭제하기</span>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <IAMSelectBox onSelect={setNickname} />
        <button
          onClick={handleDelete}
          type='button'
          className='mt-4 h-12 w-20 rounded-md border border-gray-300 px-2 text-lg text-black shadow hover:bg-gray-500'
        >
          삭제
        </button>

        <p className='mt-4 flex h-8'>
          <span className={`${resultState === 1 ? '' : 'hidden'}`}>IAM 삭제 성공</span>
          <span className={`${resultState === 2 ? '' : 'hidden'} text-red-500`}>IAM 삭제 실패</span>
        </p>
      </div>
    </div>
  )
}
