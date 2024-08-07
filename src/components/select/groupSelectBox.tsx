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

export default function SelectGroupBox() {
  const { groupSelected, setGroupSelected } = useSelectType()

  const handleGroupChange = (value: string) => {
    setGroupSelected(value === 'none' ? '' : value)
  }

  return (
    <div className='col-span-1 mt-8 h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={groupSelected} onValueChange={handleGroupChange}>
        <SelectTrigger className='h-full w-[100%]'>
          <SelectValue placeholder='Group 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>Group 선택</SelectItem>
            <SelectItem value='VPC'>VPC</SelectItem>
            <SelectItem value='Subnet'>Subnet</SelectItem>
            <SelectItem value='RouteTable'>RouteTable</SelectItem>
            <SelectItem value='InternetGateWay'>InternetGateway</SelectItem>
            <SelectItem value='Instance'>Instance</SelectItem>
            <SelectItem value='ENI'>ENI</SelectItem>
            <SelectItem value='EBS'>EBS</SelectItem>
            <SelectItem value='S3'>S3</SelectItem>
            <SelectItem value='SecurityGroup'>SecurityGroup</SelectItem>
            <SelectItem value='IAM'>IAM</SelectItem>
            <SelectItem value='RDS'>RDS</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
