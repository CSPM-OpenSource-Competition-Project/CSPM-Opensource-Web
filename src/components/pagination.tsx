'use client'

import { usePagination } from '@/components/Zustand/paginationStore'
import RightArrow from '@image/icons/right.svg'
import LeftArrow from '@image/icons/left.svg'
import RightLastArrow from '@image/icons/lastRight.svg'
import LeftLastArrow from '@image/icons/lastLeft.svg'

export default function Pagination() {
  /**
   * pagination 계산
   * 총 페이지 개수 계산 -> Math.ceil(전체 컨텐츠 개수 / 한 페이지에 보여주고자 하는 컨텐츠 개수)
   * 현재 화면에 보여질 페이지 그룹 -> 현재 페이지 / 한 화면에 나타낼 페이지 수
   * 화면에 보여질 페이지의 첫번째 페이지 번호 -> ((페이지 그룹 번호 - 1) * 한 화면에 보여줄 페이지 개수) + 1
   * 화면에 보여질 페이지의 마지막 페이지 번호 -> 페이지 그룹 번호 * 한 화면에 보여줄 페이지의 개수
   */
  const { currentPage, dataLength, itemsPerPage, setCurrentPage } = usePagination()

  const totalPage = Math.ceil(dataLength / itemsPerPage)
  const currentPageGroup = Math.ceil(currentPage / 10)
  const firstPageNum = (currentPageGroup - 1) * 10 + 1
  const lastPageNum = currentPageGroup * 10

  // 현재 페이지
  //   const startPage = Math.max(currentPage - 2, 1)

  // 마지막 페이지
  //   const endPage = Math.min(startPage + 4, totalPage)

  /**
   *
   */
  const paginate = (pageNumber: number) => {
    if (pageNumber > totalPage) {
      setCurrentPage(totalPage)
    } else if (pageNumber < 1) {
      setCurrentPage(1)
    } else {
      setCurrentPage(pageNumber)
    }
  }

  return (
    <>
      {dataLength > itemsPerPage && (
        <div className='z-0 mt-4 flex h-12 justify-center'>
          <ul className='pagination flex items-center'>
            {currentPage > 1 && ( // 현재 페이지가 1보다 커야만 이전 페이지 이동이 가능
              <>
                <li
                  className='cursor-pointer items-center bg-white px-1 py-1'
                  onClick={() => paginate(1)}
                >
                  <LeftLastArrow />
                </li>

                <li
                  className='cursor-pointer items-center bg-white px-1 py-1'
                  onClick={() => paginate(firstPageNum)}
                >
                  <LeftArrow />
                </li>
              </>
            )}

            {currentPage < totalPage && (
              <>
                <li
                  className='mx-1 cursor-pointer items-center bg-white px-1 py-1'
                  onClick={() => paginate(lastPageNum)}
                >
                  <RightArrow />
                </li>
                <li
                  className='cursor-pointer items-center bg-white px-1 py-1'
                  onClick={() => paginate(totalPage)}
                >
                  <RightLastArrow />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  )
}
