'use client'
import ToLoginButton from '@/components/button/toLoginButton'
import InputLayout from '@/components/input/inputLayout'
import Logo from '@/components/logo'
import SearchPwdFrom from '@/components/search/searchPwdFrom'
import { useState } from 'react'

export default function SearchPasswordField() {
  return (
    <main>
      <Logo />
      <h1 className='mt-6 text-2xl'>비밀번호 찾기</h1>
      <SearchPwdFrom />
      <ToLoginButton />
    </main>
  )
}
