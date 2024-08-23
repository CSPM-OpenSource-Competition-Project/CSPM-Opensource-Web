// localStorage에서 accessToken 가져오기
const getAccessToken = (): string | null => {
  return localStorage.getItem('access')
}

// accessToken 설정
const setAccessToken = (token: string): void => {
  localStorage.setItem('access', token)
}

// API 요청 옵션 타입 정의
interface FetchOptions extends RequestInit {
  body?: any // 요청 본문
}
// 공통 fetch 함수
const apiFetch = async (url: string, options?: FetchOptions): Promise<[number, any]> => {
  try {
    const accessToken = getAccessToken()

    // 옵션 헤더 출력 시 중괄호 없이 출력하기
    const headersContent = options?.headers
      ? Object.entries(options.headers)
          .map(([key, value]) => `${key}:"${value}"`)
          .join(', ')
      : ''

    // 요청 옵션에 accessToken 추가
    const response = await fetch(`${url}`, {
      ...options,
      headers: {
        headersContent,
        access: accessToken ? `${accessToken}` : '', // 빈 문자열 사용
      },
      credentials: 'include', // 쿠키를 포함하기 위해
    })
    if (!response.ok) {
      // 401 에러 발생 시 서버에서 자동으로 refreshToken 처리
      if (response.status === 401) {
        // 새로운 accessToken을 서버에서 재발급 받음
        const retryResponse = await fetch(`/reissue`, {
          method: 'POST', // 재발급 요청은 일반적으로 POST 방식
          credentials: 'include', // 쿠키를 포함하기 위해
          headers: {
            headersContent,
          },
        })

        //재발급 요청 결과
        if (!retryResponse.ok) {
          console.error('재발급 실패')
        }

        const newAccessToken = retryResponse.headers.get('access')
        if (newAccessToken) {
          setAccessToken(newAccessToken) // 새로운 토큰을 localStorage에 저장
        }

        // 재발급 받은 후 원래 요청을 다시 시도
        const finalResponse = await fetch(`${url}`, {
          ...options,
          credentials: 'include',
          headers: {
            headersContent,
            access: newAccessToken ? `${newAccessToken}` : '', // 새 토큰 사용
          },
        })

        if (!finalResponse.ok) {
          console.error('재발급 후 다시 fetch 진행 실패')
        }

        console.log('정상적으로 fetch 진행됨')
        const data = await finalResponse.json()
        return [finalResponse.status, data]
      }

      console.error('요구된 첫 번째 패치 실패')
    }

    const data = await response.json()
    return [response.status, data]
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
    return [0, null]
  }
}

export default apiFetch
