import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CoffesCartCard } from '../CoffesCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import {
  ConfirmationSectionContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from './styled'

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((coffee) => {
          return <CoffesCartCard key={coffee.id} coffee={coffee} />
        })}
        <ConfirmationSectionContainer>
          <ConfirmationSection />
        </ConfirmationSectionContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
