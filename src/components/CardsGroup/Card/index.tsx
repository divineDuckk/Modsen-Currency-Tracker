import { FC, useState } from 'react'

import { CASH_VOCAB } from '@/constants'
import { CardPopUp } from '@/components/CardsGroup/CardPopUp'

import { NUMBER_OF_NUMS_AFTER_DOT } from './constants'
import { CardContainer, CashImage, CashName, TextInfo, Value } from './styled'
import { CardProps } from './types'

export const Card: FC<CardProps> = ({ name, value }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const onPopUpClick = () => {
    setIsPopUpOpen(true)
  }
  const onPopUpClose = () => {
    setIsPopUpOpen(false)
  }

  const { fullname, image } = CASH_VOCAB[name]
  const isStock = typeof value === 'string'

  return (
    <>
      <CardContainer
        $is_stock={isStock}
        onClick={!isStock ? onPopUpClick : undefined}
      >
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
      {isPopUpOpen && (
        <CardPopUp
          onClose={onPopUpClose}
          currencyInfo={{ name, fullname, value: Number(value) }}
        />
      )}
    </>
  )
}
