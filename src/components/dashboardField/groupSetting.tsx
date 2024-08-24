'use client'

import GroupSelect from '@/components/select/groupSelect'
import SetIcon from '@image/icons/setIcon.svg'
import { useEffect, useState } from 'react'
import './dashstyle.css'
import apiFetch from '@/utils/fetchWrapper'
import { useGroupFeild } from '@/stores/groupStore'
import GroupCheckBox from '@/components/dashboardField/groupCheckBox'
import GroupNameBox from '@/components/dashboardField/groupNameBox'

export default function GroupSetting() {
  const {
    groupList,
    setGroupList,
    successState,
    setGroupName,
    setSuccessState,
    setGroupFeildReset,
  } = useGroupFeild()
  const [getFetch, setGetFetch] = useState(false)

  const groupFetch = async () => {
    const [status, data] = await apiFetch('/api/dashboard/group', {
      method: 'GET',
      headers: {},
    })
    console.log('getFetch가 일어남')

    if (status == 0) {
      console.error('fetch가 안됩니다.')
    }
    if (status === 200) {
      setGetFetch(true)
      setGroupList(data)
      setGroupFeildReset()
      setTimeout(() => {
        setSuccessState(0)
      }, 1000)
    }

    if (status === 400) {
      console.error('refresh 토큰이 없습니다.')
      setGetFetch(false)
    }

    if (status === 404) {
      console.log('클라이언트 잘못')
      setGetFetch(false)
    }
  }

  useEffect(() => {
    groupFetch()
  }, [])

  useEffect(() => {
    groupFetch()
    setGroupName('')
  }, [successState])
  return getFetch ? (
    <div className='flex h-full w-full flex-col rounded-md bg-white p-4 px-2 shadow-lg'>
      <div className='flex h-12 w-full items-center justify-between gap-2'>
        <div className='flex'>
          <SetIcon className='h-7 w-7' />
          <span className='text-xl'>스캔 그룹 세팅</span>
        </div>
        <div>
          <GroupSelect />
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <span>그룹 이름 지정</span>
        <GroupNameBox />
      </div>
      <GroupCheckBox />
    </div>
  ) : (
    <div
      className={`animate-puls flex h-full w-full flex-col justify-center gap-4 rounded-md bg-white p-4 shadow-lg`}
    >
      <div className='mt-4 h-12 w-[98%] rounded-md bg-gray-100' />
      <div className='mt-4 h-32 w-[98%] rounded-md bg-gray-100' />
    </div>
  )
}
