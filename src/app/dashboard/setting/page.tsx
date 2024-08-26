'use client'

import IamDelete from '@/components/iamSettingField/IamDelete'
import IamInputComponents from '@/components/iamSettingField/IamInputComponents'
import UpdatePassowrdComponents from '@/components/iamSettingField/UpdatePasswordComponents'

export default function Iamsetting() {
  return (
    <main className='bg-white'>
      <div className='ml-10 mt-10 bg-white'>
        <IamInputComponents />
      </div>
      <div className='ml-10 mt-10 bg-white'>
        <IamDelete />
      </div>
      <div className='ml-10 mt-10 bg-white'>
        <UpdatePassowrdComponents />
      </div>
    </main>
  )
}
