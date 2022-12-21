import { CreditCard } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styled'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  icon: ReactNode
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
