import MultiFilterMenuBar from '@/components/pageComponents/resourcePage/resourceScanMultiFilterMenuBar'
import ResourceTable from '@/components/pageComponents/resourcePage/resourceTable'

export default function Scan() {
  return (
    <div className='flex h-full w-full gap-4 rounded p-4'>
      <MultiFilterMenuBar />
      <ResourceTable />
    </div>
  )
}
