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

interface IAMSelectBoxProps {
  onSelectChange: (value: string) => void // 부모로 전달할 함수 타입 정의
}

export default function IAMSelectBox({ onSelectChange }: IAMSelectBoxProps) {
  const { iAMSelected, setIAMSelected } = useSelectType()
  const { iAMFilter, setIAMFilter } = useFilter()

  const handleIAMChange = (value: string) => {
    const selectedValue = value === 'none' ? '' : value
    setIAMSelected(selectedValue)
    if (typeof onSelectChange === 'function') {
      onSelectChange(selectedValue) // 부모로 선택된 값 전달
    } else {
      console.error('onSelectChange is not a function')
    }
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
        const iamData = Array.isArray(data) ? data : data?.iamList || []
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
    selectIamName()
  }, [])

  return (
    <div className='mt-8 h-10 w-[60%] items-center border-2 bg-white text-black'>
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
