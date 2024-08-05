import SelectIAMButton from '@/components/scanbuttons/selectIAMButton'
import SelectGroupButton from '@/components/scanbuttons/selectGroupButton'
import StartScanButton from '@/components/scanbuttons/startScanButton'
import ResourceButton from '@/components/scanbuttons/resourceButton'
import ServiceButton from '@/components/scanbuttons/serviceButton'
import ResourceTable from '@/components/pageComponents/resourcePage/resourceTable'

export default function Scan() {
  return (
    <div className='flex h-full w-full'>
      {/* 고정된 위치를 위해 relate, absolute 사용 */}
      {/* 이후 이 컴포넌트들은 스캔 페이지가 아닌 따로 MultiFilterMenuBar로 생성 */}
      <div className='mt-20 flex flex-col'>
        <span>스캔 페이지</span>
        <div className='grid grid-cols-3 gap-4'>
          <SelectIAMButton />
          <SelectGroupButton />
          <StartScanButton />
          <ResourceButton />
          <ServiceButton />
        </div>
        <ResourceTable />
      </div>
    </div>
  )
}
