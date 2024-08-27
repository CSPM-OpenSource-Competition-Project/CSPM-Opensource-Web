// 'use client'

// import { useSelectType, useFilter } from '@/stores/selectStore'
// import { useEffect, useState } from 'react'
// import apiFetch from '@/utils/fetchWrapper'

// // 리소스 페이지 리스트 조회 컬럼들 (필터링 하려는 것들이 아님)
// interface Props {
//   scanTime: string
//   accountId: string
//   resourceId: string
//   resource: string
//   service: string
// }

// type SetData = (data: Props[]) => void

// // const BASE_URL = process.env.NEXT_APP_BASE_URL

// export default function FetchData(setData: SetData) {
//   const { setIAMFilter, setScanGroupFilter } = useFilter() // 스캔 시작 전 필터링. 수정
//   const { iAMSelected, groupSelected, resourceSelected, serviceSelected } = useSelectType()

//   const fetchList = {
//     iam: iAMSelected,
//     group: groupSelected,
//     resource: resourceSelected,
//     service: serviceSelected,
//   }

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const resourceDescribe = async () => {
//     try {
//       const [statusCode, data] = await apiFetch('/resource/start-scan-list', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(fetchList),
//       })
//       console.log('statusCode1234 : ', statusCode)
//       console.log(fetchList)

//       if (statusCode === 200) {
//         setData(data)
//         console.log('200 OK : ', data)
//       }
//     } catch (error) {
//       console.error(error)
//       setData([])
//       setIAMFilter([])
//       setScanGroupFilter([])
//     }
//   }

//   useEffect(() => {
//     resourceDescribe()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
// }
