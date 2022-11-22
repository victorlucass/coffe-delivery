import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffes'
import { CoffeCard, Coffee } from '../CoffeCard'
import { OurCoffeesContainer, CoffeeList } from './styled'
export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((cf: Coffee) => (
          <CoffeCard key={cf.id} coffee={cf} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
