import ToLoginButton from '@/components/button/toLoginButton'
import Logo from '@/components/logo'
import SearchIdFrom from '@/components/search/searchIdForm'

export default function SearchIdField() {
  return (
    <main>
      <Logo />
      <h1 className='mt-6 text-xl'>아이디 찾기</h1>
      <SearchIdFrom />
      <ToLoginButton />
    </main>
  )
}
