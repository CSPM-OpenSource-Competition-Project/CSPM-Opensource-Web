'use client'

import { useEffect, useState } from 'react'
import './dashstyle.css'
import { useGroupFeild } from '@/stores/groupStore'
export default function GroupCheckBox() {
  const [groupDisable, setGroupDisable] = useState(false)
  const {
    groupName,
    groupList,
    groupIndex,
    inputVpc,
    setInputVpc,
    inputSubnet,
    setInputSubnet,
    inputRouteTable,
    setInputRouteTable,
    inputInternetGateway,
    setInputInternetGateway,
    inputInstance,
    setInputInstance,
    inputEni,
    setInputEni,
    inputEbs,
    setInputEbs,
    inputS3,
    setInputS3,
    inputSecurityGroup,
    setInputSecurityGroup,
    inputIam,
    setInputIam,
    inputRds,
    setInputRds,
  } = useGroupFeild()

  const handleChangeVpc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVpc(!inputVpc)
  }

  const handleChangeSubnet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSubnet(!inputSubnet)
  }
  const handleChangeRouteTable = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputRouteTable(!inputRouteTable)
  }

  const handleChangeSecurityGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSecurityGroup(!inputSecurityGroup)
  }

  const handleChangeInternetGateway = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputInternetGateway(!inputInternetGateway)
  }

  const handleChangeInstance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputInstance(!inputInstance)
  }

  const handleChangeEbs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEbs(!inputEbs)
  }

  const handleChangeEni = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEni(!inputEni)
  }

  const handleChangeS3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputS3(!inputS3)
  }

  const handleChangeRds = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputRds(!inputRds)
  }

  const handleChangeIam = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputIam(!inputIam)
  }

  useEffect(() => {
    if (groupIndex === -1) {
      setInputVpc(false)
      setInputSubnet(false)
      setInputRouteTable(false)
      setInputInternetGateway(false)
      setInputInstance(false)
      setInputEni(false)
      setInputEbs(false)
      setInputS3(false)
      setInputSecurityGroup(false)
      setInputIam(false)
      setInputRds(false)
    } else {
      setInputVpc(groupList[groupIndex].vpc)
      setInputSubnet(groupList[groupIndex].subnet)
      setInputRouteTable(groupList[groupIndex].routeTable)
      setInputInternetGateway(groupList[groupIndex].internetGateway)
      setInputInstance(groupList[groupIndex].instance)
      setInputEni(groupList[groupIndex].eni)
      setInputEbs(groupList[groupIndex].ebs)
      setInputS3(groupList[groupIndex].s3)
      setInputSecurityGroup(groupList[groupIndex].securityGroup)
      setInputRds(groupList[groupIndex].rds)
      setInputIam(groupList[groupIndex].iam)
    }

    if (groupName === '추가하기') {
      setGroupDisable(false)
    } else {
      setGroupDisable(true)
    }
  }, [groupIndex])

  return (
    <fieldset
      className='mt-3 flex flex-col rounded-md border border-gray-300 p-2'
      disabled={groupDisable}
    >
      <legend>그룹 선택하기</legend>

      <div className='grid grid-cols-6 gap-4'>
        <div className='gridcontainer items-center'>
          <label>VPC</label>
          <input
            type='checkbox'
            id='VPC'
            name='VPC'
            checked={inputVpc}
            onChange={handleChangeVpc}
          />
        </div>
        <div className='gridcontainer'>
          <label>서브넷</label>
          <input
            type='checkbox'
            id='Subnet'
            name='Subnet'
            checked={inputSubnet}
            onChange={handleChangeSubnet}
          />
        </div>
        <div className='gridcontainer'>
          <label>보안 그룹</label>
          <input
            type='checkbox'
            id='Secrity Group'
            name='Secrity Group'
            checked={inputSecurityGroup}
            onChange={handleChangeSecurityGroup}
          />
        </div>
        <div className='gridcontainer'>
          <label>라우팅</label>
          <input
            type='checkbox'
            id='Route Table'
            name='Route Table'
            checked={inputRouteTable}
            onChange={handleChangeRouteTable}
          />
        </div>
        <div className='gridcontainer'>
          <label className='flex flex-col'>
            <span>인터넷</span>
            <span>게이트웨이</span>
          </label>
          <input
            type='checkbox'
            id='Internet Gateway'
            name='Internet Gateway'
            checked={inputInternetGateway}
            onChange={handleChangeInternetGateway}
          />
        </div>
        <div className='gridcontainer'>
          <label>인스턴스</label>
          <input
            type='checkbox'
            id='EC2'
            name='EC2'
            checked={inputInstance}
            onChange={handleChangeInstance}
          />
        </div>
        <div className='gridcontainer'>
          <label>EBS</label>
          <input
            type='checkbox'
            id='EBS'
            name='EBS'
            checked={inputEbs}
            onChange={handleChangeEbs}
          />
        </div>
        <div className='gridcontainer'>
          <label>ENI</label>
          <input
            type='checkbox'
            id='ENI'
            name='ENI'
            checked={inputEni}
            onChange={handleChangeEni}
          />
        </div>
        <div className='gridcontainer'>
          <label>S3</label>
          <input type='checkbox' id='S3' name='S3' checked={inputS3} onChange={handleChangeS3} />
        </div>
        <div className='gridcontainer'>
          <label>RBS</label>
          <input
            type='checkbox'
            id='RBS'
            name='RBS'
            checked={inputRds}
            onChange={handleChangeRds}
          />
        </div>
        <div className='gridcontainer'>
          <label>IAM</label>
          <input
            type='checkbox'
            id='IAM'
            name='IAM'
            checked={inputIam}
            onChange={handleChangeIam}
          />
        </div>
      </div>
    </fieldset>
  )
}
