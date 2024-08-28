'use client'

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { useSelectType } from '@/stores/selectStore'

export default function SelectServiceBox() {
  const { serviceSelected, setServiceSelected } = useSelectType()

  const handleServiceChange = (value: string) => {
    setServiceSelected(value === 'none' ? '' : value)
  }

  return (
    <div className='mt-4 h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={serviceSelected} onValueChange={handleServiceChange}>
        <SelectTrigger>
          <SelectValue placeholder='Service 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>Service 선택</SelectItem>
            <SelectItem value='VPC'>VPC</SelectItem>
            <SelectItem value='EC2'>EC2</SelectItem>
            <SelectItem value='S3'>S3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
