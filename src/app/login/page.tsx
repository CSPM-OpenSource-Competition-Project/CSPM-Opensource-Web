import MainLogin from '@/components/loginComponents/mainLogin'
import Container from '@/utils/container'

export default function Login() {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <Container>
        <MainLogin />
      </Container>
    </main>
  )
}
