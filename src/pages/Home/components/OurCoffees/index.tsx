import { TitleText } from '../../../../components/Typography'
import { CoffeCard } from '../CoffeCard'
import { OurCoffeesContainer, CoffeeList } from './styled'
export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeeList>
        <CoffeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
