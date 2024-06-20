import {
  CurrenciesChangeBlock,
  CurrencyButton,
  MiniCurrenciesCardBlock,
} from './styled'
import { FC, useEffect, useState } from 'react'

import { PopUp } from '@/components/PopUp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectedCurrencies } from '@/store/selectors/currencies'
import { fetchSelectedCurrencies } from '@/store/thunks/fetchSelectedCurrencies'
import { CURRENCIES_FULLNAME, CURRENCY_TO_SHORTNAME_VOCAB } from '@/constants'

import { CURRENCY_TITLE } from './constants'
import { MiniCurrenciesCard } from './MiniCurrenciesCard'
import { CardPopUpProps, CurrencyKey } from './types'

export const CardPopUp: FC<CardPopUpProps> = ({ currencyInfo, onClose }) => {
  const [selectedCurrecncy, setSelectedCurrency] = useState(
    currencyInfo.fullname
  )
  const shortName =
    CURRENCY_TO_SHORTNAME_VOCAB[selectedCurrecncy as CurrencyKey]

  const data = useAppSelector(selectedCurrencies(shortName))
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!data) {
      dispatch(fetchSelectedCurrencies(shortName))
    }
  }, [shortName])

  const handleClickCurrency = (currencyValue: string) => () => {
    setSelectedCurrency(currencyValue)
  }
  return (
    <PopUp onClose={onClose} title={CURRENCY_TITLE}>
      <>
        <MiniCurrenciesCardBlock>
          {data?.map(({ code, value }) => (
            <MiniCurrenciesCard
              nameFrom={code}
              nameTo={shortName}
              value={value}
              key={code}
            />
          ))}
        </MiniCurrenciesCardBlock>
        <CurrenciesChangeBlock>
          {CURRENCIES_FULLNAME.map((fullnume) => (
            <CurrencyButton
              onClick={handleClickCurrency(fullnume)}
              $isChoosen={selectedCurrecncy === fullnume}
              key={fullnume}
            >
              {fullnume}
            </CurrencyButton>
          ))}
        </CurrenciesChangeBlock>
      </>
    </PopUp>
  )
}
