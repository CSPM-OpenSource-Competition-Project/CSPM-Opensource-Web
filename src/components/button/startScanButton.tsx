'use client'

import { useEffect, useState } from 'react'
import ButtonLayer from '@/components/button/buttonLayer'
;('@/stores/selectStore')
import { useSelectType } from '@/stores/selectStore'

const BASE_URL = process.env.NEXT_PUBLIC_NEXT_APP_BASE_URL

export default function StartScanButton() {
  const { setIAMSelected, setGroupSelected } = useSelectType()

  // const handleStartScan = () => {
  //   setIAMSelected
  //   setGroupSelected
  // }

  const [dataResult, setDataResult] = useState('')

  /**
   * 스캔 시작 버튼 기능 진행 중
   * 필터 2개 선택해야 스캔 시작이 가능하도록 처리
   */

  // const scanList = scanClient.map((client, index) => ({
  //   client,
  //   accountId: scanAccountIdList[index],
  //   accountName: scanAccountName[index],
  // }))

  const scanStart = async () => {
    //   try {
    //     const response = await fetch(`${BASE_URL}/resources`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json; charset=utf-8',
    //       },
    //       body: JSON.stringify(scanList),
    //     })
    //     if (response.ok) {
    //       const inner = await response.json()
    //       const data = inner
    //       setDataResult(data.message)
    //     }
    //   } catch (error) {
    //     setDataResult('api 연결이 안됩니다.')
    //   }
  }

  const handleScanStart = () => {
    scanStart()
  }

  // useEffect(() => {}, [dataResult])

  return (
    // 스캔 시작 버튼
    <div className='mt-8'>
      <ButtonLayer buttonStyle='bg-[#002865]' childText='스캔 시작' method={handleScanStart} />
    </div>
  )
}
