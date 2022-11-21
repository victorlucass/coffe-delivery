import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styled'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <span>Header</span>
      <Outlet />
    </LayoutContainer>
  )
}
