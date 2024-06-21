import {
  CurrencyValye,
  FromToInfo,
  MiniCurrenciesCardContainer,
} from './styled'
import { FC } from 'react'

import { TO_FIXED_CURRENCY } from './constants'
import { MiniCurrenciesCardProps } from './types'

export const MiniCurrenciesCard: FC<MiniCurrenciesCardProps> = ({
  nameFrom,
  nameTo,
  value,
}) => {
  return (
    <MiniCurrenciesCardContainer>
      <FromToInfo>
        {nameFrom} to {nameTo}
      </FromToInfo>
      <CurrencyValye>{value.toFixed(TO_FIXED_CURRENCY)}</CurrencyValye>
    </MiniCurrenciesCardContainer>
  )
}
