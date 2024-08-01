import SignupButton from '@/components/button/signupButton'
import Logo from '@/components/logo'
import AWSField from '@/components/signupComponents/awsField'
import EmailField from '@/components/signupComponents/emailField'
import PassowrdField from '@/components/signupComponents/passwordField'

export default function SignupComponent() {
  return (
    <main>
      <Logo />
      <aside className='flex flex-col gap-2'>
        <EmailField />
      </aside>
      <aside className='mt-6 flex flex-col gap-2'>
        <PassowrdField />
      </aside>
      <aside className='mt-6 flex flex-col gap-2'>
        <AWSField />
      </aside>
      <SignupButton />
    </main>
  )
}
