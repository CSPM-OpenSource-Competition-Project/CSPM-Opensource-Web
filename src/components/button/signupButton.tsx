'use client'
import { useSingUpFeild } from '@/stores/useSignUpStore'
import { encrypt } from '@/utils/crypto'
import { useRouter } from 'next/navigation'

export default function SignupButton() {
  const { email, password, accessKey, secretKey, region, userName, accountId, emailVaildator } =
    useSingUpFeild()
  const router = useRouter()

  const handleSubmit = () => {
    if (
      email &&
      password &&
      accessKey &&
      secretKey &&
      region &&
      userName &&
      accountId &&
      emailVaildator
    ) {
      handleFetch()
    } else if (userName.length === 0) {
      alert('Iam 검증을 해주세요')
    } else if (emailVaildator === false) {
      alert('이메일 검증을 해주세요')
    } else {
      alert('필수 사항을 입력해주세요')
    }
  }

  const handleFetch = async () => {
    try {
      const response = await fetch('/api/account/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // mode: 'no-cors',
        body: JSON.stringify({
          email: email,
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
      } else {
        alert('회원가입 실패')
      }
    } catch (e) {
      console.error('에러 : ' + e)
    }
  }

  return (
    <button
      onClick={handleSubmit}
      className='mt-4 h-12 w-[370px] rounded-lg bg-sky-500 text-lg font-bold text-white'
    >
      회원가입
    </button>
  )
}
