// 스캔 시간, AccountID, 리소스, 리소스ID, Service
interface Props {
  scanTime: string
  accountId: string
  resource: string
  resourceId: string
  service: string
}

interface TableRowProps {
  index: number
  listIndex: Props
}

export default function ResourceTableRow({ index, listIndex }: TableRowProps) {
  return (
    <div
      key={index}
      className='grid-cols-17 grid h-10 w-full items-center text-nowrap break-words border-b-2 border-gray-300 bg-white text-sm'
    >
      <div className='col-span-2 flex h-full w-full items-center overflow-hidden'>
        {listIndex.scanTime}
      </div>
      <div className='col-span-2 flex h-full w-full items-center overflow-hidden'>
        {listIndex.accountId}
      </div>
      <div className='col-span-2 flex h-full w-full items-center overflow-hidden'>
        {listIndex.resource}
      </div>
      <div className='col-span-2 flex h-full w-full items-center overflow-hidden'>
        {listIndex.resourceId}
      </div>
      <div className='col-span-2 flex h-full w-full items-center overflow-hidden'>
        {listIndex.service}
      </div>
    </div>
  )
}
