'use client'

import { useSelectType } from '@/stores/selectStore'
import { useEffect, useState } from 'react'

// 리소스 페이지 리스트 조회 컬럼들 (필터링 하려는 것들이 아님)
interface Props {
  scanTime: string
  accountId: string
  resourceId: string
  resource: string
  service: string
}

type SetData = (data: Props[]) => void

const BASE_URL = process.env.NEXT_PUBLIC_NEXT_APP_BASE_URL

export default function FetchData(setData: SetData) {
  const [resourceId, setResourceId] = useState<string>('')

  // 필터링
  const { iAMSelected, groupSelected, resourceSelected, serviceSelected } = useSelectType()

  const fetchList = {
    iam: iAMSelected,
    group: groupSelected,
    resource: resourceSelected,
    resourceId: resourceId,
    service: serviceSelected,
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resourceDescribe = async () => {
    try {
      const response = await fetch(`${BASE_URL}/resources/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(fetchList),
      })

      if (response.ok) {
        const inner = await response.json()

        if (inner.code === 0) {
          const data = inner.result.data
          setData(data)
        } else if (inner.code === 12) {
          setData([])
        }
      }
    } catch (error) {
      console.error(error)
      setData([])
    }
  }

  useEffect(() => {
    resourceDescribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iAMSelected, groupSelected, resourceSelected, resourceId, serviceSelected])
}
