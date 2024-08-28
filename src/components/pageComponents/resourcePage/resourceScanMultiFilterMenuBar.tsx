import SelectIAMBox from '@/components/select/iAMSelectBox'
import SelectGroupBox from '@/components/select/groupSelectBox'
import StartScanButton from '@/components/button/startScanButton'
import ResourceSelectBox from '@/components/select/resourceSelectBox'
import ServiceSelectBox from '@/components/select/serviceSelectbox'
import New from '@image/icons/newdata.svg'
import SettingIon from '@image/icons/setting.svg'
import Pen from '@image/icons/pen.svg'

export default function ResourceScanMultiFilterMenuBar() {
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
          <SelectIAMBox />
          <SelectGroupBox />
          <StartScanButton />
        </div>
      </div>
      <div className='mt-8'>
        <div className='flex items-center gap-1'>
          <Pen className='h-4 w-4' />
          <span className='text-lg'> 테이블 필터</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
          <ServiceSelectBox />
          <ResourceSelectBox />
        </div>
      </div>
    </div>
  )
}
