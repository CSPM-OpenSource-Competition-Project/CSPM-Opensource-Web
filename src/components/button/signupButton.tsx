'use client'
import { useSingUpFeild } from '@/stores/useSignUpStore'
import { encrypt } from '@/utils/crypto'
import { useRouter } from 'next/navigation'

export default function SignupButton() {
  const { email, password, accessKey, secretKey, region, userName, accountId } = useSingUpFeild()
  const router = useRouter()

  const handleSubmit = () => {
    if (email && password && accessKey && secretKey && region && userName && accountId) {
      handleFetch()
    } else if (userName.length === 0) {
      alert('Iam 검증을 해주세요')
    } else {
      alert('필수 사항을 입력해주세요')
    }
  }

  const handleFetch = async () => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          email: encrypt(email),
          password: encrypt(password),
          accessKey: encrypt(accessKey),
          secretKey: encrypt(secretKey),
          region: encrypt(region),
          accountId: encrypt(accountId),
          userName: encrypt(userName),
        }),
      })

      console.log(response.status)
      if (response.status === 200) {
        console.log('회원가입 성공')
        router.push('/')
      }
    } catch (e) {
      console.error('에러 : ' + e)
    }
  }

  return (
    <button
      type='submit'
      onClick={handleSubmit}
      className='mt-4 h-12 w-[370px] rounded-lg bg-sky-500 text-lg font-bold text-white'
    >
      회원가입
    </button>
  )
}
