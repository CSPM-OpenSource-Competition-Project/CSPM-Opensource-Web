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

export default function SelectResourceBox() {
  const { resourceSelected, setResourceSelected, serviceSelected } = useSelectType()

  const handleResourceChange = (value: string) => {
    setResourceSelected(value === 'none' ? '' : value)
  }

  const selectList = (serviceSelected: string) => {
    if (serviceSelected === 'VPC') {
      return (
        <>
          <SelectItem value='vpc-'>VPC</SelectItem>
          <SelectItem value='rtb-'>라우팅 테이블</SelectItem>
          <SelectItem value='igw-'>인터넷 게이트웨이</SelectItem>
          <SelectItem value='subnet-'>서브넷</SelectItem>
          <SelectItem value='sg-'>보안 그룹</SelectItem>
        </>
      )
    } else if (serviceSelected === 'EC2') {
      return (
        <>
          <SelectItem value='i-'>인스턴스</SelectItem>
          <SelectItem value='vol-'>EBS 볼륨</SelectItem>
          <SelectItem value='eni-'>네트워크 인터페이스</SelectItem>
        </>
      )
    } else if (serviceSelected === 'S3') {
      return (
        <>
          <SelectItem value='bucket'>S3</SelectItem>
        </>
      )
    }
    return (
      <>
        <SelectItem value='vpc-'>VPC</SelectItem>
        <SelectItem value='rtb-'>라우팅 테이블</SelectItem>
        <SelectItem value='igw-'>인터넷 게이트웨이</SelectItem>
        <SelectItem value='subnet-'>서브넷</SelectItem>
        <SelectItem value='sg-'>보안 그룹</SelectItem>
        <SelectItem value='i-'>인스턴스</SelectItem>
        <SelectItem value='vol-'>EBS 볼륨</SelectItem>
        <SelectItem value='eni-'>네트워크 인터페이스</SelectItem>
        <SelectItem value='bucket'>S3</SelectItem>
      </>
    )
  }

  /**
   * 선택한 서비스에 따라 관련된 리소스가 나옴.
   * ex) VPC 선택하면 리소스는 그와 관련된 VPC, 라우팅테이블, InternetGateWay, 서브넷, 보안 그룹이 나옴
   */
  return (
    <div className='mt-8 h-10 w-[60%] items-center border-2 bg-white text-black'>
      <Select value={resourceSelected} onValueChange={handleResourceChange}>
        <SelectTrigger>
          <SelectValue placeholder='Resource 선택' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='none'>Resource 선택</SelectItem>
            {selectList(serviceSelected)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
