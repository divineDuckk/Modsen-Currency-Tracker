import { FC, useEffect, useState } from 'react'

import { PopUp } from '@/components/PopUp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectedCurrencies } from '@/store/selectors/currencies'
import { fetchSelectedCurrencies } from '@/store/thunks/fetchSelectedCurrencies'

import { CURRENCY_TITLE } from './constants'
import { MiniCurrenciesCard } from './MiniCurrenciesCard'
import { MiniCurrenciesCardBlock } from './styled'
import { CardPopUpProps } from './types'

export const CardPopUp: FC<CardPopUpProps> = ({ currencyInfo, onClose }) => {
  const data = useAppSelector(selectedCurrencies)[currencyInfo.name]
  const [selectedCurrecncy, setSelectedCurrency] = useState(currencyInfo.name)
  const dispatch = useAppDispatch()
  useEffect(() => {
    typeof data === 'undefined' &&
      dispatch(fetchSelectedCurrencies(currencyInfo.name))
  }, [selectedCurrecncy])
  return (
    <PopUp onClose={onClose} title={CURRENCY_TITLE}>
      <>
        <MiniCurrenciesCardBlock>
          {data &&
            data.map((elem) => (
              <MiniCurrenciesCard
                nameFrom={elem.code}
                nameTo={currencyInfo.name}
                value={elem.value}
                key={elem.code}
              />
            ))}
        </MiniCurrenciesCardBlock>
        <p>{currencyInfo.fullname}</p>
      </>
    </PopUp>
  )
}
