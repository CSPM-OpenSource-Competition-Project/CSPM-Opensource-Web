export default function SideBar() {
  return (
    <div className='bg-#E3ECF1'>
      <div className='fixed bottom-0 left-0 top-20 z-50 h-full w-[200px] border-r-4 border-[#202020] bg-[#E3ECF1] text-[#202020] transition-all ease-in-out'>
        <div className='mb-8'>
          <h3 className='text-3xl text-slate-700'>스캔</h3>
          <ul className='p-2'>
            <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
              최신 데이터
            </li>
            <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
              History
            </li>
            <li className='ml-4 flex cursor-pointer list-inside items-center rounded-[10px] p-1.5 text-xl hover:bg-cyan-400 active:bg-amber-300'>
              오류
            </li>

            <h3 className='mt-8 text-3xl text-slate-700'>취약점 검출</h3>
            <ul className='p-2'>
              <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
                최신 데이터
              </li>
              <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
                History
              </li>
            </ul>

            <h3 className='mt-8 text-3xl text-slate-700'>설정</h3>
            <ul className='p-2'>
              <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
                IAM 추가
              </li>
              <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
                계정 수정
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}
