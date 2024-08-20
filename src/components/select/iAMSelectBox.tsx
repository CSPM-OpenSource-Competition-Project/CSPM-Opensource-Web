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

export default function SelectIAMBox() {
  const { iAMSelected, setIAMSelected } = useSelectType()
  const { iAMFilter } = useFilter()

  const handleIAMChange = (value: string) => {
    setIAMSelected(value === 'none' ? '' : value)
  }

  return (
    <div className='mt-8 h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={iAMSelected} onValueChange={handleIAMChange}>
        <SelectTrigger>
          <SelectValue placeholder='IAM 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>IAM 선택해줘</SelectItem>
            {iAMFilter?.map((iam, index) => (
              <SelectItem id={`account-${index}-select`} key={index} value={iam}>
                {iam}
              </SelectItem>
            ))}
            <SelectItem value='none'>IAM 선택해줘</SelectItem>
            {/* {iAMFilter?.map((iam, index) => (
              <SelectItem id={`account-${index}-select`} key={index} value={iam}>
                {iam}
              </SelectItem>
            ))} */}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
