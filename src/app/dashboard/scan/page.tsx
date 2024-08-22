import MultiFilterMenuBar from '@/components/pageComponents/resourcePage/resourceScanMultiFilterMenuBar'
import ResourceTable from '@/components/pageComponents/resourcePage/resourceTable'

export default function Scan() {
  return (
    <div className='flex h-full w-full rounded bg-white p-3'>
      <div className='mt-4'>
        <p>스캔 페이지</p>
        <MultiFilterMenuBar />
        <ResourceTable />
      </div>
    </div>
  )
}
