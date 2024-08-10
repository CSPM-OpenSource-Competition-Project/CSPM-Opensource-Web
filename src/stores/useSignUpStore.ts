import { create } from 'zustand'

type signUpFeild = {
  email: string
  emailVaildator: string
  password: string
  accessKey: string
  secretKey: string
  region: string
  accountId: string
  userName: string
}

type setSignUpFeild = {
  setEmail: (inputEmail: string) => void
  setEmailVaildator: (inputNumber: string) => void
  setPassword: (inputPassword: string) => void
  setSignUpReset: () => void
  setAccessKey: (inputAccessKey: string) => void
  setSecretKey: (inputSecretKey: string) => void
  setRegion: (inputRegion: string) => void
  setAccountId: (inputAccountId: string) => void
  setUserName: (inputUserId: string) => void
}

const signUpField: signUpFeild = {
  email: '',
  emailVaildator: '',
  password: '',
  accessKey: '',
  secretKey: '',
  region: 'ap-northeast-2',
  accountId: '',
  userName: '',
}

export const useSingUpFeild = create<signUpFeild & setSignUpFeild>((set) => ({
  ...signUpField,
  setEmail: (inputEmail) => set((state) => ({ email: inputEmail })),
  setEmailVaildator: (inputNumber) => set((state) => ({ emailVaildator: inputNumber })),
  setPassword: (inputPassword) => set((state) => ({ password: inputPassword })),
  setAccessKey: (inputAccessKey) => set((state) => ({ accessKey: inputAccessKey })),
  setSecretKey: (inputSecretKey) => set((state) => ({ secretKey: inputSecretKey })),
  setRegion: (inputRegion) => set((state) => ({ region: inputRegion })),
  setAccountId: (inputAccountid) => set((state) => ({ accountId: inputAccountid })),
  setUserName: (inputUserId) => set((state) => ({ userName: inputUserId })),
  setSignUpReset: () => set(signUpField),
}))
