'use client'

import { useSelectType, useFilter } from '@/stores/selectStore'
import { useEffect, useState } from 'react'
import apiFetch from '@/utils/fetchWrapper'

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
  const { setIAMFilter, setScanGroupFilter } = useFilter() // 스캔 시작 전 필터링. 수정

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resourceDescribe = async () => {
    console.log('12341234')
    try {
      const [statusCode, response] = await apiFetch('/resource/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('statusCode : ', statusCode)
      console.log('response : ', response)

      if (response.ok && statusCode === 200) {
        console.log('200나와라 : ', statusCode)
        // const inner = await response.json()
        // console.log('inner : ', inner)
        // 2가지 셀렉트 -> 이곳에서 iam, scangroup 필터링할 데이터 선택.
        // if (inner.code === 0) {
        //   const data = inner.result.data
        //   const iamListData = inner.result.iam
        //   const scanGroupListData = inner.result.scanGroup
        //   console.log('data1 : ', data)
        //   console.log('data2 : ', iamListData)
        //   console.log('data33 : ', scanGroupListData)
        //   setData(data)
        //   setIAMFilter(iamListData)
        //   setScanGroupFilter(scanGroupListData)
        // } else if (inner.code === 12) {
        //   setData([])
        //   setIAMFilter([])
        //   setScanGroupFilter([])
        // }
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
  }, [])
}
