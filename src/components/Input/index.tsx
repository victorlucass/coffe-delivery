import { InputHTMLAttributes } from 'react'
import { InputStyleContainer } from './styled'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />
}
