import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RigthText,
} from './styled'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rigthText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rigthText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rigthText && <RigthText>{rigthText}</RigthText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
