import SearchPasswordField from '@/components/search/searchPasswordField'
import Container from '@/utils/container'

export default function SearchPassword() {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <Container>
        <SearchPasswordField />
      </Container>
    </main>
  )
}
