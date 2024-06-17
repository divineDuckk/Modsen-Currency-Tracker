import { FC } from 'react'

import { PopUp } from '@/components/PopUp'

import { CURRENCY_TITLE } from './constants'
import { CardPopUpProps } from './types'

export const CardPopUp: FC<CardPopUpProps> = ({ currencyInfo, onClose }) => {
  return (
    <PopUp onClose={onClose} title={CURRENCY_TITLE}>
      <p>{currencyInfo.fullname}</p>
    </PopUp>
  )
}
