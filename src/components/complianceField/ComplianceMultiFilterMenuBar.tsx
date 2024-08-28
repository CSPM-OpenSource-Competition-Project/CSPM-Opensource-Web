import VulnerabilityLevel from '../../components/select/vulnerabilityLevel'
import CommonButton from '../../components/ui/commonButton'
import VulnerabilityTitle from '../../components/select/vulnerabilityTitle'
import IAMSelectBox from '../../components/select/iAMSelectBox'
import GroupSelectBox from '../../components/select/groupSelectBox'
import ResourceSelectBox from '../../components/select/resourceSelectBox'
import New from '@image/icons/newdata.svg'
import SettingIon from '@image/icons/setting.svg'
import Pen from '@image/icons/pen.svg'

export default function MultiFilterMenuBar() {
  return (
    <div className='flex h-full w-[30%] flex-col rounded-md bg-white p-4 shadow-lg'>
      <div className='flex gap-1'>
        <New className='h-7 w-7' />
        <span className='text-xl'>자원 스캔</span>
      </div>
      <div className='mt-4'>
        <div className='flex items-center gap-1'>
          <SettingIon className='h-4 w-4' />
          <span className='text-lg'> 스캔 설정</span>
        </div>
        <div className='mt-4 flex flex-col items-center justify-center gap-8'>
          <IAMSelectBox />

          <GroupSelectBox />

          <CommonButton label='취약점 검출' />
        </div>
      </div>

      <div className='mt-8'>
        <div className='flex items-center gap-1'>
          <Pen className='h-4 w-4' />
          <span className='text-lg'> 테이블 필터</span>
        </div>
        <div className='mt-4 flex flex-col items-center justify-center'>
          <ResourceSelectBox />
          <VulnerabilityLevel />
          <VulnerabilityTitle />
        </div>
      </div>
    </div>
  )
}
