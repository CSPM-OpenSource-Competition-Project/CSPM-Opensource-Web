'use client'
import { useEffect, useState } from 'react'
import ResourceTableRow from '@/components/pageComponents/resourcePage/table/resourceTableRow'
import Pagination from '@/components/pagination'
import TableHead from '@/components/pageComponents/resourcePage/table/resourceTableHead'
import { usePagination } from '@/components/Zustand/paginationStore'

// 스캔 시간, AccountID, 리소스, 리소스ID, Service
interface Props {
  scanTime: string
  accountId: string
  resource: string
  resourceId: string
  service: string
}

export default function TableComponent() {
  const [data, setData] = useState<Props[]>([]) // 목록에 가져올 데이터

  // 현재 페이지, 페이지당 표시할 아이템 수, 데이터의 총 길이,
  const { currentPage, itemsPerPage, setDataLength, setCurrentPage, setItemsPerPage } =
    usePagination()
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem)

  useEffect(() => {
    setCurrentPage(1)
    setDataLength(data.length)
    setItemsPerPage(14)
  }, [data])

  return (
    <div className='mt-3 h-[700px] w-full overflow-hidden'>
      <div className='flex h-[35px] w-full items-center gap-4 text-sm text-black'>
        <span>Total : {data.length}</span>
      </div>

      <TableHead />

      {/* TableRow는 map 사용해서 반복하여 데이터 크기만큼 뽑아 내야 함. */}
      {/* <ResourceTableRow index={index} listIndex={listIndex} /> */}
      <div className='h-[800px]'>
        {currentItems.length > 0 ? (
          currentItems.map((listIndex, index) => (
            <ResourceTableRow key={index} index={index} listIndex={listIndex} />
          ))
        ) : (
          <div className='mt-4 flex items-center justify-center'>리스트가 없습니다.</div>
        )}
      </div>
      <Pagination />
    </div>
  )
}
