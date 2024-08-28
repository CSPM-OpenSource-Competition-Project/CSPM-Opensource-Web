'use client'

import React, { useState, useEffect } from 'react'
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

interface IAMSelectBoxProps {
  onSelect: (value: string) => void
}

function IAMSelectBox({ onSelect }: IAMSelectBoxProps) {
  const [iamOptions, setIamOptions] = useState<string[]>([])

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
  }, [])

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className='w-48 border border-[#B0B3B8]'>
        <SelectValue placeholder='IAM 선택' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {iamOptions.map((iam) => (
            <SelectItem key={iam} value={iam}>
              {iam}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default function IamDelete() {
  const [nickname, setNickname] = useState('')
  const router = useRouter()

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
        alert('IAM 삭제 성공')
        router.push('/dashboard')
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
    <div className='ml-15 flex flex-row items-center justify-center gap-4'>
      <IAMSelectBox onSelect={setNickname} />
      <button
        onClick={handleDelete}
        type='button'
        className='h-12 w-20 rounded-lg bg-blue-500 text-lg font-bold text-white'
      >
        삭제
      </button>
    </div>
  )
}
