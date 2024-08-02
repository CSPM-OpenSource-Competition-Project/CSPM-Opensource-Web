import Link from 'next/link'

export default function LoginLink() {
  return (
    <>
      <Link href={'/login/search/id'}>아이디 찾기</Link>
      <span>|</span>
      <Link href='/login/search/password'>비밀번호 찾기</Link>
      <span>|</span>
      <Link href='/login/signup'>회원가입</Link>
    </>
  )
}
