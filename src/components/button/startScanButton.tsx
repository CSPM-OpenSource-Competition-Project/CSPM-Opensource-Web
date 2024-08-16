import ButtonLayer from '@/components/button/buttonLayer'

export default function StartScanButton() {
  return (
    // 스캔 시작 버튼
    <div className='mt-8'>
      <ButtonLayer buttonStyle='bg-[#002865]' childText='스캔 시작' />
    </div>
  )
}
