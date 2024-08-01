'use client'

import SignupButton from '@/components/button/signupButton'
import Logo from '@/components/logo'
import AWSField from '@/components/signupComponents/awsField'
import EmailField from '@/components/signupComponents/emailField'
import PasswordField from '@/components/signupComponents/passwordField'

export default function SignupComponent() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('회원가입 정보 제출')
  }
  return (
    <main>
      <Logo />
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <aside className='flex flex-col gap-2'>
          <EmailField />
        </aside>
        <aside className='mt-6 flex flex-col gap-2'>
          <PasswordField />
        </aside>
        <aside className='mt-6 flex flex-col gap-2'>
          <AWSField />
        </aside>
        <SignupButton />
      </form>
    </main>
  )
}
