'use client'

import { useGroupFeild } from '@/stores/groupStore'
import apiFetch from '@/utils/fetchWrapper'
import { useEffect, useState } from 'react'

export default function GroupNameBox() {
  const [afterGroupName, setAfterGroupName] = useState('')
  const [inputDisabled, setInputDisabled] = useState(false)
  const {
    successState,
    setSuccessState,
    groupIndex,
    groupList,
    setInputGroupName,
    inputGroupName,
    groupName,
    inputVpc,
    inputSubnet,
    inputRouteTable,
    inputInternetGateway,
    inputInstance,
    inputEni,
    inputEbs,
    inputS3,
    inputSecurityGroup,
    inputIam,
    inputRds,
  } = useGroupFeild()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAfterGroupName(event.target.value)
    setInputGroupName(event.target.value)
  }

  const handleSubnet = async () => {
    console.log('실행됨')
    const [status, data] = await apiFetch('/api/dashboard', {
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        updateNumber: groupIndex,
        afterResourceGroupName: afterGroupName,
        beforeResourceGroupName: groupName,
        vpc: inputVpc,
        subnet: inputSubnet,
        routeTable: inputRouteTable,
        internetGateway: inputInternetGateway,
        instance: inputInstance,
        eni: inputEni,
        ebs: inputEbs,
        s3: inputS3,
        securityGroup: inputSecurityGroup,
        iam: inputIam,
        rds: inputRds,
      }),
    })

    if (status !== 200) {
      console.log(status)
      console.error(data)
      setSuccessState(2)
    }
    setSuccessState(1)

    console.log('정성적으로 저장됨')
    console.log(data)
  }

  const handleDelete = async () => {
    const [status, data] = await apiFetch(`/api/dashboard/${groupName}`, {
      method: 'DELETE',
      headers: {},
    })

    if (status !== 200) {
      console.log(status)
      console.error(data)
      setSuccessState(4)
    }
    setSuccessState(3)

    console.log('정성적으로 삭제됨')
    console.log(data)
  }

  useEffect(() => {
    if (inputGroupName) {
      setAfterGroupName(inputGroupName)
    }
    if (groupIndex === -1) {
      setAfterGroupName('')
      setInputGroupName('')
    } else {
      setAfterGroupName(groupName)
      setInputGroupName(groupList[groupIndex].resourceGroupName)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupIndex])

  useEffect(() => {
    if (groupName === '추가하기') {
      setAfterGroupName('')
      setInputDisabled(false)
    } else {
      setInputDisabled(true)
    }
  }, [groupName])

  return (
    <div className='flex justify-between gap-1'>
      <input
        type='text'
        name='group_name'
        disabled={inputDisabled}
        value={afterGroupName}
        placeholder='group name'
        onChange={handleChange}
        className={`w-[70%] rounded-sm border border-gray-300 px-1 shadow ${inputDisabled ? 'bg-gray-100' : ''}`}
      />
      <div>
        <span className={`${successState === 1 ? '' : 'hidden'} text-blue-500`}>추가 성공</span>
        <span className={`${successState === 2 ? '' : 'hidden'} text-red-500`}>추가 실패</span>
        <span className={`${successState === 3 ? '' : 'hidden'} text-blue-500`}>삭제 성공</span>
        <span className={`${successState === 4 ? '' : 'hidden'} text-red-500`}>삭제 실패</span>
      </div>

      <div className='flex gap-2'>
        <button
          className='h-8 rounded-md border border-gray-300 px-2 shadow hover:bg-gray-500'
          onClick={handleSubnet}
        >
          추가
        </button>
        <button
          className='h-8 rounded-md border border-gray-300 px-2 shadow hover:bg-gray-500'
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
    </div>
  )
}
