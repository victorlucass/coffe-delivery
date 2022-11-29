import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styled'

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
    </CompleteOrderContainer>
  )
}
