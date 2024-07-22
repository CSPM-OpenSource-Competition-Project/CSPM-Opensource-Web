export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='h-full w-full flex-col items-center justify-center'>{children}</div>
}
