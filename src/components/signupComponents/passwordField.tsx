export default function PassowrdField() {
  return (
    <>
      <label className='text-xl'>비밀번호</label>
      <input
        type='password'
        name='set_password'
        className='h-12 w-[300px] rounded-md border border-black px-1'
        placeholder='비밀번호 입력'
      ></input>
    </>
  )
}
