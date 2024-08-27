'use client'

import { useState } from 'react'

export default function GroupSetting() {
  const [check, setCheck] = useState(false)
  return (
    <div className='flex h-full w-full rounded-md bg-white p-4 px-2'>
      <div className='flex h-auto w-full justify-between'>
        <span className='text-xl'>스캔 그룹 세팅</span>
      </div>
    </div>
  )
}
