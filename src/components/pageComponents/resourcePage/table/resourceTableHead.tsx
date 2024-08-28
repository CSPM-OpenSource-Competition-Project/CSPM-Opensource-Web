export default function TableHead() {
  return (
    <div className='flex h-12 w-full items-center border-b-2 border-t-2 border-gray-300 bg-gray-200'>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>스캔 시간</div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>AccountID</div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>리소스</div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>리소스ID</div>
      <div className='flex flex-1 justify-center overflow-hidden whitespace-nowrap'>Service</div>
    </div>
  )
}
