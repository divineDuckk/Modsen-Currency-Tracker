import { FC } from 'react'

import { CASH_VOCAB } from '@/constants'

import { NUMBER_OF_NUMS_AFTER_DOT } from './constants'
import { CardContainer, CashImage, CashName, TextInfo, Value } from './styled'
import { CardProps } from './types'

export const Card: FC<CardProps> = ({ name, value }) => {
  const { fullname, image } = CASH_VOCAB[name]
  return (
    <CardContainer>
      <CashImage src={image} alt="cash logo" />
      <TextInfo>
        <CashName>{fullname}</CashName>
        <Value>
          {typeof value === 'number'
            ? `R$ ${value.toFixed(NUMBER_OF_NUMS_AFTER_DOT)}`
            : value}
        </Value>
      </TextInfo>
    </CardContainer>
  )
}
