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

interface Props {
  iamName: string
}

type SetData = (data: Props[]) => void
export default function SelectIAMBox(setData: SetData) {
  const { iAMSelected, setIAMSelected } = useSelectType()
  const { iAMFilter, setIAMFilter } = useFilter()

  const handleIAMChange = (value: string) => {
    setIAMSelected(value === 'none' ? '' : value)
  }

  const selectIamName = async () => {
    try {
      const [statusCode, response] = await apiFetch('/resource/iam', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok && statusCode === 200) {
        const inner = await response.json()
        console.log('inner : ', inner)

        if (inner.code === 0) {
          const data = inner.result.data
          const iamNameData = inner.result.iamName
          setData(data)
          setIAMFilter(iamNameData)
        } else if (inner.code === 12) {
          setData([])
          setIAMFilter([])
        }
      }
    } catch (error) {
      console.error('Error fetching IAM resources:', error)
    }
  }

  useEffect(() => {
    selectIamName
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='mt-8 h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={iAMSelected === '' ? 'none' : iAMSelected} onValueChange={handleIAMChange}>
        <SelectTrigger>
          <SelectValue placeholder='IAM 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>IAM 선택해</SelectItem>
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
