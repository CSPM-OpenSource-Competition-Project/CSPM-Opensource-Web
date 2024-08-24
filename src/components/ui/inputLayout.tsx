interface Props {
  setType: string
  setName: string
  setPlaceholder: string
  setCSS: string
  setValue: (value: string) => void
}

export default function InputLayout({ setType, setName, setPlaceholder, setCSS, setValue }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <input
      className={`h-12 w-[300px] border border-gray-400 px-1 ${setCSS}`}
      type={setType}
      name={setName}
      placeholder={setPlaceholder}
      onChange={handleChange}
    ></input>
  )
}
