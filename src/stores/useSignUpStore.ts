import { create } from 'zustand'

type signUpFeild = {
  email: string
  emailVaildator: string
  password: string
  accessKey: string
  secretKey: string
  regin: string
}

type setSignUpFeild = {
  setEmail: (inputEmail: string) => void
  setEmailVaildator: (inputNumber: string) => void
  setPassword: (inputPassword: string) => void
  setSignUpReset: () => void
  setAccessKey: (inputAccessKey: string) => void
  setSecretKey: (inputSecretKey: string) => void
  setRegin: (inputRegin: string) => void
}

const signUpField: signUpFeild = {
  email: '',
  emailVaildator: '',
  password: '',
  accessKey: '',
  secretKey: '',
  regin: 'ap-northeast-2',
}

export const useSingUpFeild = create<signUpFeild & setSignUpFeild>((set) => ({
  ...signUpField,
  setEmail: (inputEmail) => set((state) => ({ email: inputEmail })),
  setEmailVaildator: (inputNumber) => set((state) => ({ emailVaildator: inputNumber })),
  setPassword: (inputPassword) => set((state) => ({ password: inputPassword })),
  setAccessKey: (inputAccessKey) => set((state) => ({ accessKey: inputAccessKey })),
  setSecretKey: (inputSecretKey) => set((state) => ({ secretKey: inputSecretKey })),
  setRegin: (inputRegin) => set((state) => ({ regin: inputRegin })),
  setSignUpReset: () => set(signUpField),
}))
