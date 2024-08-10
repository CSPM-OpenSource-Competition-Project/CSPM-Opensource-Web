import SignupButton from '@/components/button/signupButton'
import Logo from '@/components/logo'
import AWSField from '@/components/signupComponents/awsField'
import EmailField from '@/components/signupComponents/emailField'
import PasswordField from '@/components/signupComponents/passwordField'

export default function SignupComponent() {
  return (
    <main>
      <Logo />
      <div className='flex flex-col'>
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
      </div>
    </main>
  )
}
