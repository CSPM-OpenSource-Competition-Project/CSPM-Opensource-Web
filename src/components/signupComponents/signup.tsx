'use client'

import SignupButton from '@/components/button/signupButton'
import Logo from '@/components/logo'
import AWSField from '@/components/signupComponents/awsField'
import EmailField from '@/components/signupComponents/emailField'
import PasswordField from '@/components/signupComponents/passwordField'
import { useSingUpFeild } from '@/stores/useSignUpStore'
import { useRouter } from 'next/navigation'

export default function SignupComponent() {
  const { email, password, accessKey, secretKey, regin } = useSingUpFeild()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          accessKey: accessKey,
          secretKey: secretKey,
          regin: regin,
        }),
      })

      if (response.status === 205) {
        console.log('회원가입 성공')
        router.push('/')
      }
    } catch (e) {
      console.error('에러 : ' + e)
    }
  }
  return (
    <main>
      <Logo />
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <aside className='flex flex-col gap-2'>
          <EmailField />
        </aside>
        <aside className='flex flex-col gap-2'>
          <PasswordField />
        </aside>
        <aside className='mt-8 flex flex-col gap-2'>
          <AWSField />
        </aside>

        <SignupButton />
      </form>
    </main>
  )
}
