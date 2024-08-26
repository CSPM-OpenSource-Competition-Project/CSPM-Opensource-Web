'use client'

import React from 'react'
import IAMSelectBox from '@/components/select/iAMSelectBox'
import apiFetch from '@/utils/fetchWrapper'

export default function IamDelete() {
  const handleSubmit = async () => {
    try {
      const resourceId = 'your-resource-id' // 실제 삭제할 리소스의 ID를 여기에 설정
      const [statusCode, data] = await apiFetch(`/api/resource/${resourceId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (statusCode === 200) {
        console.log('삭제 성공:', data)
      } else {
        console.log('삭제 실패:', statusCode)
      }
    } catch (e) {
      console.error('삭제 중 오류 발생:', e)
    }
  }

  return (
    <div className='ml-15 flex flex-row justify-center gap-4'>
      <IAMSelectBox />
      <button
        onClick={handleSubmit}
        type='button' // 이 부분을 수정
        className='mt-7 h-12 w-20 rounded-lg bg-blue-500 text-lg font-bold text-white'
      >
        삭제
      </button>
    </div>
  )
}
