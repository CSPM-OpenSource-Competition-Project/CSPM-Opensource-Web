'use client'
import SetIcon from '@image/icons/setting.svg'
import Pen from '@image/icons/pen.svg'
import Identity from '@image/icons/identity.svg'
import Chart from '@image/icons/chart.svg'
import ShieldExclamtion from '@image/icons/shiledExclamation.svg'
import Table from '@image/icons/table.svg'
import History from '@image/icons/history.svg'
import Error from '@image/icons/error.svg'
import New from '@image/icons/newdata.svg'
import BarChart from '@image/icons/barchart.svg'
import SettingIcon from '@image/icons/setIcon.svg'

import './style.css'
import Link from 'next/link'
export default function SideBar() {
  return (
    <div className='fixed h-full w-[200px] p-3'>
      <Link href='/dashboard'>
        <div className='flex cursor-pointer items-center gap-2 hover:text-blue-600'>
          <Chart className='h-4 w-4' />
          <span className='text-base'>Dashboard</span>
          <hr className='shortcustomhr' />
        </div>
        <ul>
          <li
            onClick={() => {}}
            className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'
          >
            <SetIcon className='h-4 w-4' />
            스캔 그룹
          </li>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <BarChart className='h-4 w-4' /> 스캔 그래프
          </li>
          <li className='flex cursor-pointer list-inside items-center gap-4 text-base hover:text-blue-600'>
            <BarChart className='h-4 w-4' />
            취약점 그래프
          </li>
        </ul>
      </Link>

      <Link href='/dashboard/scan'>
        <div className='mt-4 flex items-center gap-2 hover:text-blue-600'>
          <Table className='h-4 w-4' />
          <span className='text-base'>스캔</span>
          <hr className='customhr' />
        </div>

        <ul>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <New className='h-4 w-4' />
            최신 데이터
          </li>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <History className='h-4 w-4' /> History
          </li>
          <li className='flex cursor-pointer list-inside items-center gap-4 text-base hover:text-blue-600'>
            <Error className='h-4 w-4' />
            오류
          </li>
        </ul>
      </Link>

      <Link href='/dashboard/compliance'>
        <div className='mt-4 flex items-center gap-2 hover:text-blue-600'>
          <ShieldExclamtion className='h-4 w-4' />
          <span className='text-base'>취약점 검사</span>
          <hr className='mdcustomhr' />
        </div>

        <ul>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <New className='h-4 w-4' />
            최신 데이터
          </li>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <History className='h-4 w-4' /> History
          </li>
        </ul>
      </Link>
      <Link href='/dashboard/setting'>
        <div className='mt-4 flex items-center gap-2 hover:text-blue-600'>
          <span className='flex items-center gap-1 text-base'>
            <SettingIcon className='h-4 w-4' />
            설정
          </span>
          <hr className='customhr' />
        </div>
        <ul className=''>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <Pen className='h-4 w-4' /> IAM 추가
          </li>
          <li className='flex cursor-pointer items-center gap-4 text-base hover:text-blue-600'>
            <Identity className='h-4 w-4' />
            계정 수정
          </li>
        </ul>
      </Link>
    </div>
  )
}
