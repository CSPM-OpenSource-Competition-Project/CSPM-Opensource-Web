'use client'

import IamDelete from '@/components/iamSettingField/IamDelete'
import IamInputComponents from '@/components/iamSettingField/IamInputComponents'
import UpdatePassowrdComponents from '@/components/iamSettingField/UpdatePasswordComponents'

export default function Iamsetting() {
  return (
    <main className='flex h-full w-full gap-4'>
      <div className='flex h-full w-[50%] flex-col gap-4'>
        <IamInputComponents /> <IamDelete />
      </div>
      <div className='h-full w-[50%]'>
        <UpdatePassowrdComponents />
      </div>
    </main>
  )
}
