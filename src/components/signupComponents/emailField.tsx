export default function EmailField() {
  return (
    <>
      <label className='text-xl'>Email</label>
      <div className='flex gap-4'>
        <input
          type='email'
          name='set_email'
          className='h-12 w-[300px] rounded-md border border-black px-1'
          placeholder='이메일 입력'
        ></input>
        <button className='h-12 w-14 rounded-md bg-blue-900 text-white'>검증</button>
      </div>
      <div className='flex gap-4'>
        <input
          type='number'
          name='set_number'
          className='h-12 w-[300px] rounded-md border border-black px-1'
          placeholder='인증 번호 입력'
        ></input>
        <button className='h-12 w-14 rounded-md bg-blue-900 text-white'>확인</button>
      </div>
      <span>사용 가능 합니다.</span>
      <span>사용할 수 없습니다.</span>
    </>
  )
}
