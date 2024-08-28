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
import apiFetch from '@/utils/fetchWrapper'
import { useEffect } from 'react'

export default function SelectIAMBox() {
  const { iAMSelected, setIAMSelected } = useSelectType()
  const { iAMFilter, setIAMFilter } = useFilter()

  const handleIAMChange = (value: string) => {
    setIAMSelected(value === 'none' ? '' : value)
  }

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

        const iamData = Array.isArray(data) ? data : data?.iamList || [] // 예:
        if (Array.isArray(iamData) && iamData.every((item) => typeof item === 'string')) {
          setIAMFilter(iamData)
        } else {
          console.error('Fetched data is not a valid string array:', iamData)
        }
      }
    } catch (error) {
      console.error('Error fetching IAM resources:', error)
    }
  }

  useEffect(() => {
    selectIamName() // 함수 호출
    console.log('Current iAMFilter:', iAMFilter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={iAMSelected === '' ? 'none' : iAMSelected} onValueChange={handleIAMChange}>
        <SelectTrigger>
          <SelectValue placeholder='IAM 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>IAM 선택</SelectItem>
            {iAMFilter?.map((iam, index) => (
              <SelectItem id={`account-${index}-select`} key={index} value={iam}>
                {iam}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
