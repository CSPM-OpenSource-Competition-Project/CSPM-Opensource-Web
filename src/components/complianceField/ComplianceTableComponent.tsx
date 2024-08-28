'use client'
import { useEffect, useState } from 'react'
import ResourceTableRow from '@/components/pageComponents/resourcePage/table/resourceTableRow'
import Pagination from '@/components/pagination'
import { usePagination } from '@/stores/paginationStore'
import ComplianceTableHead from '../pageComponents/resourcePage/table/complianceTableHead'

// 스캔 시간, AccountID, 리소스, 리소스ID, Service
interface Props {
  scanTime: string
  accountId: string
  resource: string
  resourceId: string
  service: string
}

export default function ComplianceTableComponent() {
  const [newSelect, setNewSelect] = useState(true)
  const [data, setData] = useState<Props[]>([]) // 목록에 가져올 데이터

  const handlerSelectNew = () => {
    setNewSelect(!newSelect)
  }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className='flex h-full w-[70%] flex-col justify-start rounded-md bg-white p-4 shadow-lg'>
      <div className='mb-2 flex w-full items-center justify-between gap-4 text-sm text-black'>
        <span>Total : {data.length}</span>
        <div className='flex gap-2'>
          <button
            onClick={handlerSelectNew}
            className={`${newSelect ? 'text-blue-500' : 'text-black'}`}
          >
            New
          </button>
          <span>|</span>
          <button
            onClick={handlerSelectNew}
            className={`${newSelect ? 'text-black' : 'text-blue-500'}`}
          >
            History
          </button>
        </div>
      </div>

      <ComplianceTableHead />

      {/* TableRow는 map 사용해서 반복하여 데이터 크기만큼 뽑아 내야 함. */}
      {/* <ResourceTableRow index={index} listIndex={listIndex} /> */}
      <div className=''>
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
