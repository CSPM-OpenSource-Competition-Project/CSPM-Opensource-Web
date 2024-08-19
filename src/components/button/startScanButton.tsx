'use client'

import ButtonLayer from '@/components/button/buttonLayer'
;('@/stores/selectStore')
import { useSelectType } from '@/stores/selectStore'

export default function StartScanButton() {
  const { setIAMSelected, setGroupSelected, setResourceSelected, setServiceSelected } =
    useSelectType()

  const handleStartScan = () => {
    setIAMSelected
    setGroupSelected
    setResourceSelected
    setServiceSelected
  }

  return (
    // 스캔 시작 버튼
    <div className='mt-8'>
      <ButtonLayer buttonStyle='bg-[#002865]' childText='스캔 시작' method={handleStartScan} />
    </div>
  )
}
