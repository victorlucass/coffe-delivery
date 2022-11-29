import { TitleText } from '../../../../components/Typography'
import { CoffesCartCard } from '../CoffesCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import {
  ConfirmationSectionContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from './styled'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <CoffesCartCard />
        <ConfirmationSectionContainer>
          <ConfirmationSection />
        </ConfirmationSectionContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
