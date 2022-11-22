import { Intro } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'
import { HomeContainer } from './styled'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
