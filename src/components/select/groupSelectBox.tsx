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
import { useEffect } from 'react'
import apiFetch from '@/utils/fetchWrapper'

interface Props {
  iamName: string
}

type SetData = (data: Props[]) => void
export default function SelectGroupBox(setData: SetData) {
  const { groupSelected, setGroupSelected } = useSelectType()
  const { scanGroupFilter, setScanGroupFilter } = useFilter()

  const handleGroupChange = (value: string) => {
    setGroupSelected(value === 'none' ? '' : value)
  }

  const selectScanGroup = async () => {
    try {
      const [statusCode, data] = await apiFetch('/resource/iam-scanGroup', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (statusCode === 200) {
        const inner = data
        console.log('inner : ', inner)

        if (inner.code === 0) {
          const data = inner.result.data
          const iamNameData = inner.result.iamName
          setData(data)
          setScanGroupFilter(iamNameData)
        } else if (inner.code === 12) {
          setData([])
          setScanGroupFilter([])
        }
      }
    } catch (error) {
      console.error('Error fetching IAM resources:', error)
    }
  }

  useEffect(() => {
    selectScanGroup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={groupSelected} onValueChange={handleGroupChange}>
        <SelectTrigger>
          <SelectValue placeholder='Group 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>Group 선택해</SelectItem>
            {scanGroupFilter?.map((group, index) => (
              <SelectItem id={`account-${index}-select`} key={index} value={group}>
                {group}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
