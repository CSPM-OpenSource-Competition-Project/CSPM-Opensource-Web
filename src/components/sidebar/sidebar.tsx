export default function SideBar() {
  return (
    <div className='fixed h-full w-[200px] bg-[#eef2f8] p-4 text-[#202020]'>
      <span className='flex text-xl text-slate-700'>
        스캔 <hr className='w-50 align-middle' />
      </span>
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

        <span className='mt-8 text-3xl text-slate-700'>취약점 검출</span>
        <ul className='p-2'>
          <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
            최신 데이터
          </li>
          <li className='hover:bg-custom-bg active:bg-custom-bg ml-4 flex cursor-pointer items-center rounded-[10px] p-1.5 text-xl'>
            History
          </li>
        </ul>

        <span className='mt-8 text-3xl text-slate-700'>설정</span>
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
    // </div>
  )
}
