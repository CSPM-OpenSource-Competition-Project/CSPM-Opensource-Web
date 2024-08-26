'use client'

import { useEffect, useState } from 'react'
import ButtonLayer from '@/components/button/buttonLayer'
;('@/stores/selectStore')
import { useSelectType } from '@/stores/selectStore'
import apiFetch from '@/utils/fetchWrapper'

export default function StartScanButton() {
  const { iAMSelected, groupSelected } = useSelectType()

  const [dataResult, setDataResult] = useState('')

  /**
   * 스캔 시작 버튼 기능 진행 중
   * 필터 2개 선택해야 스캔 시작이 가능하도록 처리
   */
  const scanList = {
    iAMSelected,
    groupSelected,
  }

  const scanStart = async () => {
    try {
      const [statusCode, response] = await apiFetch('/resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scanList),
      })
      if (response.ok && statusCode === 200) {
        const inner = await response.json()
        const data = inner
        setDataResult(data.message)
        console.log(statusCode)
        console.log(data)
      }
    } catch (error) {
      setDataResult('api 연결이 안됩니다.')
    }
  }

  // const handleScanStart = () => {
  //   scanStart()
  // }

  useEffect(() => {
    console.log('ResourceResult가 스캔되었습니다.', dataResult)
  }, [dataResult])

  return (
    // 스캔 시작 버튼
    <div className='mt-8'>
      <ButtonLayer buttonStyle='bg-[#002865]' childText='스캔 시작' method={scanStart} />
    </div>
  )
}
