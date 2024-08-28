'use client'

import { useEffect, useState } from 'react'
import Pagination from '@/components/pagination'
import TableHead from '@/components/pageComponents/resourcePage/table/resourceTableHead'
import { usePagination } from '@/stores/paginationStore'
import StartScanButton from '@/components/button/startScanButton'
import ResourceTableRow from '@/components/pageComponents/resourcePage/table/resourceTableRow'

// 스캔 시간, AccountID, 리소스, 리소스ID, Service 리스트 조회
interface Props {
  scanTime: string
  accountId: string
  resource: string
  resourceId: string
  service: string
}
export default function TableComponent() {
  const [data, setData] = useState<Props[]>([]) // 목록에 가져올 데이터
  StartScanButton(setData)
  const [newSelect, setNewSelect] = useState(true)

  // 현재 페이지, 페이지당 표시할 아이템 수, 데이터의 총 길이,
  const { currentPage, itemsPerPage, setDataLength, setCurrentPage, setItemsPerPage } =
    usePagination()
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem)

  const handlerSelectNew = () => {
    setNewSelect(!newSelect)
  }
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
      <TableHead />
      <div className='h-auto'>
        {currentItems.length > 0 ? (
          currentItems.map((listIndex, index) => (
            <ResourceTableRow key={index} index={index} listIndex={listIndex} />
          ))
        ) : (
          <div className='mt-4 flex items-center justify-center'>리스트가 없습니다!!</div>
        )}
      </div>
      <Pagination />
    </div>
  )
}
