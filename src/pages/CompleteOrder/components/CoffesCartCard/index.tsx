import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styled'

export function CoffesCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/8bcb/3d33/7b04857330d98e72e67bde570cbc8963?Expires=1670198400&Signature=AdXyxLDpzqPUCP8CzkyyPzJami4iP7gdkmEOmzGKc~Zs7obroCjRjHYhFnFMarUxPB8XCwey5Rg-iZb3-Z1zRAcPzLhnP4QTOHHi142Wl~O757m8VvBWgndjG5ZJ~3J8D4oMCuRHKO-V44eXzH25K8T2XMCHxDQF2S5B5sXZy~6NSslrA3vu2TJkaSJIlm6ktbsp8NqnEl4XVf1RGyqqC8gQyUuxyZO0EQAGy8nePDSPvuokrhhQdPWMnPzuOLEkF45qDs~FD-qA74qnRf0TKc2wLoMZ3kb-dWa~PI33N1JDChg4S-7dfiahCVFQnQH7kNPyWnGrXBybj4vQyBmBWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="coffe"
        />
        <div>
          <RegularText color="subtitle">Teste</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
