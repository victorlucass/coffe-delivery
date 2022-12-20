import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styled'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffesCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
  }
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.photo} alt="coffe" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton type="button" onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formatMoney(coffee.price * coffee.quantity)}</p>
    </CoffeeCartCardContainer>
  )
}
