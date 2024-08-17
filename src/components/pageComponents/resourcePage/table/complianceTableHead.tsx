export default function TableHead() {
  return (
    <div className='flex h-12 w-[800px] items-center border-b-2 border-t-2 border-gray-300 bg-gray-200'>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>스캔 시간</div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>AccountID</div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>
        취약점 등급
      </div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>
        취약점 타이틀
      </div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>
        AccountName
      </div>
    </div>
  )
}
