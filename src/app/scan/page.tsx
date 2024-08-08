import SelectIAMBox from '@/components/select/iAMSelectBox'
import SelectGroupBox from '@/components/select/groupSelectBox'
import StartScanButton from '@/components/button/startScanButton'
import ResourceSelectBox from '@/components/select/resourceSelectBox'
import ServiceSelectBox from '@/components/select/serviceSelectbox'
import ResourceTable from '@/components/pageComponents/resourcePage/resourceTable'

export default function Scan() {
  return (
    <div className='flex h-screen w-full rounded bg-white p-3'>
      <div className='mt-4'>
        <p>스캔 페이지</p>
        <div className='grid w-full grid-cols-3'>
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
