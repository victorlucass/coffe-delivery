import { NavLink } from 'react-router-dom'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styled'
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function HeaderComponent() {
  return (
    <HeaderContainer className="container">
      <div>
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple" as="span">
            <MapPin size={20} weight="fill" />
            Manaus, AM
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <span>1</span>
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
