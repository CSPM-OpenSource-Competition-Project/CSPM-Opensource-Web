import ToLoginButton from '@/components/button/toLoginButton'

import Logo from '@/components/logo'
import SearchPwdFrom from '@/components/search/searchPwdFrom'

export default function SearchPasswordField() {
  return (
    <main>
      <Logo />
      <h1 className='mt-6 text-2xl'>비밀번호 재설정</h1>
      <SearchPwdFrom />
      <ToLoginButton />
    </main>
  )
}
