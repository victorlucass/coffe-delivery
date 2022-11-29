import { CreditCard } from 'phosphor-react'
import { PaymentMethodContainer } from './styled'

export function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentMethodContainer>
  )
}
