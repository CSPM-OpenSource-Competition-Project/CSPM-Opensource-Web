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

  return (
    // <div>
    //   <button className='mt-16 w-[150px] rounded-xl border-2 p-2'>IAM 선택</button>
    // </div>

    <div>
      <Select>
        <SelectTrigger className='h-full w-[60%]'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={'none'}>IAM 선택</SelectItem>
            {iAMFilter?.map((iam, index) => (
              <SelectItem key={index} value={iam}>
                {iam}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
