import SignupComponent from '@/components/signupComponents/signup'
import Container from '@/utils/container'

export default function signup() {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <Container>
        <SignupComponent />
      </Container>
    </main>
  )
}
