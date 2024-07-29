import { FC, useState } from 'react'

import { CASH_VOCAB } from '@/constants'
import { CardPopUp } from '@/components/CardsGroup/CardPopUp'

import { NUMBER_OF_NUMS_AFTER_DOT } from './constants'
import { CardContainer, CashImage, CashName, TextInfo, Value } from './styled'
import { CardProps } from './types'

export const Card: FC<CardProps> = ({ name, value }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const handlePopUpClick = () => {
    if (!isStock) {
      setIsPopUpOpen(true)
    }
  }
  const handlePopUpClose = () => {
    setIsPopUpOpen(false)
  }

  const { fullname, image } = CASH_VOCAB[name]
  const isStock = typeof value === 'string'

  return (
    <>
      <CardContainer
        $isStock={isStock}
        onClick={handlePopUpClick}
        data-testid="open_popup"
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
          onClose={handlePopUpClose}
          currencyInfo={{ name, fullname, value: Number(value) }}
        />
      )}
    </>
  )
}
