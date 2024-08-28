'use client'

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { useFilter, useSelectType } from '@/stores/selectStore'
import { useEffect, useState } from 'react'
import apiFetch from '@/utils/fetchWrapper'
import { useSettingTrigger } from '@/stores/settingFetchTrigger'

interface GroupSelectBoxProps {
  onSelect: (value: string) => void
}

export default function SelectGroupBox() {
  const [groupOptions, setGorupOptions] = useState<string[]>([])
  const { fetchTrigger } = useSettingTrigger()

  const handleIAMChange = (value: string) => {
    handleIAMChange(value === 'none' ? '' : value)
  }



  const selectGroupName = async () => {
    try {
      const [statusCode, data] = await apiFetch('/resource/scangroup', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (statusCode === 200) {
        console.log('Fetched IAM Data:', data)

        const groupData = Array.isArray(data) ? data : data?.groupList || []
        if (Array.isArray(groupData) && groupData.every((item) => typeof item === 'string')) {
          setGorupOptions(groupData)
        } else {
          console.error('Fetched data is not a valid string array:', groupData)
        }
      }
    } catch (error) {
      console.error('Error fetching IAM resources:', error)
    }
  }

  useEffect(() => {
    selectGroupName()
  }, [, fetchTrigger])

  return (
    <Select onValueChange={handleIAMChange}>
      <SelectTrigger className='w-[400px] border border-[#B0B3B8]'>
        <SelectValue placeholder='Gorup 선택' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {groupOptions.map((group) => (
            <SelectItem key={group} value={group}>
              {group}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
