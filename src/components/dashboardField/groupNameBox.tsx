'use client'

import { useGroupFeild } from '@/stores/groupStore'
import { useEffect } from 'react'

export default function GroupNameBox() {
  const { groupIndex, groupList, setInputGroupName, inputGroupName } = useGroupFeild()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputGroupName(event.target.value)
  }

  useEffect(() => {
    if (groupIndex === -1) {
      setInputGroupName('')
    } else {
      setInputGroupName(groupList[groupIndex].resourceGroupName)
    }
  }, [groupIndex])
  return (
    <div className='flex justify-between'>
      <input
        type='text'
        name='group_name'
        value={inputGroupName}
        placeholder='group name'
        onChange={handleChange}
        className='w-[70%] rounded-sm border border-gray-300 px-1 shadow'
      />
      <button className='h-8 rounded-md border border-gray-300 px-2 shadow hover:bg-gray-500'>
        추가 | 수정
      </button>
    </div>
  )
}
