import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styled'

interface BenefitItemProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoWithIcon({ icon, text, iconBg }: BenefitItemProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
