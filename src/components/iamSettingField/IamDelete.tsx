'use client'

import React, { useState } from 'react'
import IAMSelectBox from '@/components/select/iAMSelectBox'
import apiFetch from '@/utils/fetchWrapper'

export default function IamDelete() {
  const [nickname, setNickname] = useState('')

  const handleIAMChange = (selectedIAM: string) => {
    setNickname(selectedIAM)
  }

  const handleDelete = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('선택 IAM:', nickname)
    try {
      const [statusCode, data] = await apiFetch(`/api/iamsettings`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ nickname: nickname }]),
      })
      if (statusCode === 200) {
        console.log('삭제 성공:', data)
        alert('IAM 삭제 성공')
      } else {
        console.log('삭제 실패:', statusCode)
        alert('IAM 삭제 실패')
      }
    } catch (e) {
      console.error('삭제 중 오류 발생:', e)
    }
  }

  return (
    <div className='ml-15 flex flex-row justify-center gap-4'>
      <IAMSelectBox onSelectChange={handleIAMChange} /> {/* onSelectChange 전달 확인 */}
      <button
        onClick={handleDelete}
        type='button'
        className='mt-7 h-12 w-20 rounded-lg bg-blue-500 text-lg font-bold text-white'
      >
        삭제
      </button>
    </div>
  )
}
