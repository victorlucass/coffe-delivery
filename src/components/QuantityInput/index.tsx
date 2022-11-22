import { IconWrapper, QuantityInputContainer } from './styled'
import { Minus, Plus } from 'phosphor-react'
interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity?: number
  onIncrease?: () => void
  onDecrease?: () => void
}
export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity = 1,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
