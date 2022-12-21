import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styled'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
interface CoffeeProps {
  coffee: Coffee
}
export function CoffeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }
  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((item) => (
          <span key={coffee.id + item}>{item}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatMoney(coffee.price)}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
