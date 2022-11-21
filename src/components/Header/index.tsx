import { NavLink } from 'react-router-dom'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styled'
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
// import { MapPin, ShoppingCart } from 'phosphor-react'
export function HeaderComponent() {
  return (
    <HeaderContainer className="container">
      <div>
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              1
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
