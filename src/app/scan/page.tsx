import SelectIAMBox from '@/components/select/iAMSelectBox'
import SelectGroupBox from '@/components/select/groupSelectBox'
import StartScanButton from '@/components/button/startScanButton'
import ResourceSelectBox from '@/components/select/resourceSelectBox'
import ServiceSelectBox from '@/components/select/serviceSelectbox'
import ResourceTable from '@/components/pageComponents/resourcePage/resourceTable'

export default function Scan() {
  return (
    <div className='flex h-full w-full'>
      <div className='mt-32'>
        <span>스캔 페이지</span>
        <div className='grid w-[600px] grid-cols-3'>
          <SelectIAMBox />
          <SelectGroupBox />
          <StartScanButton />
          <ResourceSelectBox />
          <ServiceSelectBox />
        </div>
        <div className='mt-8'>
          <ResourceTable />
        </div>
      </div>
    </div>
  )
}
