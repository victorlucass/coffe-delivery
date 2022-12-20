import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styled'

export function ConfirmationSection() {
  const { totalItemPrice, cartQuantity } = useCart()

  const priceDeliveryFee = 3.5
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatMoney(totalItemPrice)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatMoney(priceDeliveryFee)}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formatMoney(totalItemPrice + priceDeliveryFee)}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        type="submit"
        disabled={cartQuantity <= 0}
      />
    </ConfirmationSectionContainer>
  )
}
