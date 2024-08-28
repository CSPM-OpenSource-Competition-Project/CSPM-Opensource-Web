'use client'

import { useEffect, useState } from 'react'
import ButtonLayer from '@/components/button/buttonLayer'
;('@/stores/selectStore')
import { useFilter, useSelectType } from '@/stores/selectStore'
import apiFetch from '@/utils/fetchWrapper'
import TableComponent from '@/components/pageComponents/resourcePage/resourceTable'

interface Props {
  scanTime: string
  accountId: string
  resource: string
  resourceId: string
  service: string
}

export default function StartScanButton(setData: Props[]) {
  const { setIAMFilter, setScanGroupFilter } = useFilter() // 스캔 시작 전 필터링. 수정
  const { iAMSelected, groupSelected, resourceSelected, serviceSelected } = useSelectType()
  const [dataResult, setDataResult] = useState<Props[]>([])
  // const [dataResult, setDataResult] = useState<string[]>([])

  /**
   * 스캔 시작 버튼 기능 진행 중
   * 필터 2개 선택해야 스캔 시작이 가능하도록 처리
   * 스캔 시작 버튼을 클릭한 후에 리스트가 조회되도록 해야 함.
   */
  const fetchList = {
    iam: iAMSelected,
    group: groupSelected,
    // resource: resourceSelected,
    // service: serviceSelected,
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scanStart = async () => {
    try {
      const [statusCode, data] = await apiFetch('/resource/start-scan-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fetchList),
      })
      console.log('statusCode1234 : ', statusCode)
      console.log(fetchList)

      if (statusCode === 200) {
        // const data = await response.json()
        setDataResult(data)
        console.log('200 OK : ', data)
      }
    } catch (error) {
      console.error('ERROR : api 연결이 안됩니다.', error)
      setIAMFilter([])
      setScanGroupFilter([])
    }
  }

  // useEffect(() => {
  //   console.log('ResourceResult가 스캔되었습니다.', dataResult)
  // }, [dataResult, scanStart])

  return (
    // 스캔 시작 버튼
    <div className=''>
      <ButtonLayer buttonStyle='bg-[#002865]' childText='스캔 시작' method={scanStart} />
      {/* {dataResult.length > 0 && <TableComponent data={dataResult} />} */}
      {dataResult.length > 0 && <TableComponent />}
    </div>
  )
}
