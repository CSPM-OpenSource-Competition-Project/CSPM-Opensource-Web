'use client'

import { useSelectType, useFilter } from '@/stores/selectStore'
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

// const BASE_URL = process.env.NEXT_APP_BASE_URL

export default function FetchData(setData: SetData) {
  const [resourceId, setResourceId] = useState<string>('')
  const { setIAMFilter, setScanGroupFilter } = useFilter() // 스캔 시작 전 필터링. 수정

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
    const authorization = localStorage.getItem('authorization')
    const refreshToken = localStorage.getItem('refreshToken')
    try {
      const response = await fetch('resource/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorization || '',
          'Refresh-Token': refreshToken || '',
        },
        credentials: 'include',
        // body: JSON.stringify(fetchList),
      })

      if (response.ok) {
        const inner = await response.json()

        // 2가지 셀렉트
        if (inner.code === 0) {
          const data = inner.result.data
          const iamListData = inner.result.iam
          const scanGroupListData = inner.result.scanGroup
          setData(data)
          setIAMFilter(iamListData)
          setScanGroupFilter(scanGroupListData)
        } else if (inner.code === 12) {
          setData([])
          setIAMFilter([])
          setScanGroupFilter([])
        }
      }
    } catch (error) {
      console.error(error)
      setData([])
      setIAMFilter([])
      setScanGroupFilter([])
    }
  }

  useEffect(() => {
    resourceDescribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchList])
}
