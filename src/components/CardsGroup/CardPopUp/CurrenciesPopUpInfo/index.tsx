import {
  CurrenciesPopUpInfoContainer,
  CurrencyValye,
  FromToInfo,
} from './styled'
import { FC } from 'react'

import { TO_FIXED_CURRENCY } from './constants'
import { CurrenciesPopUpInfoProps } from './types'

export const CurrenciesPopUpInfo: FC<CurrenciesPopUpInfoProps> = ({
  nameFrom,
  nameTo,
  value,
}) => {
  return (
    <CurrenciesPopUpInfoContainer>
      <FromToInfo>
        {nameFrom} to {nameTo}
      </FromToInfo>
      <CurrencyValye>{value.toFixed(TO_FIXED_CURRENCY)}</CurrencyValye>
    </CurrenciesPopUpInfoContainer>
  )
}
