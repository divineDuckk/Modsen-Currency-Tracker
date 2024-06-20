import {
  CurrenciesChangeBlock,
  CurrencyButton,
  MiniCurrenciesCardBlock,
} from './styled'
import { FC, useState } from 'react'

import { PopUp } from '@/components/PopUp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectedCurrencies } from '@/store/selectors/currencies'
import { fetchSelectedCurrencies } from '@/store/thunks/fetchSelectedCurrencies'
import { CURRENCIES_FULLNAME, CURRENCY_TO_SHORTNAME_VOCAB } from '@/constants'

import { CURRENCY_TITLE } from './constants'
import { MiniCurrenciesCard } from './MiniCurrenciesCard'
import { CardPopUpProps, CurrencyKey } from './types'

export const CardPopUp: FC<CardPopUpProps> = ({
  currencyInfo,
  handleClose,
}) => {
  const [selectedCurrecncy, setSelectedCurrency] = useState(
    currencyInfo.fullname
  )
  const shortName =
    CURRENCY_TO_SHORTNAME_VOCAB[selectedCurrecncy as CurrencyKey]

  const data = useAppSelector(selectedCurrencies)[shortName]
  const dispatch = useAppDispatch()

  if (!data) {
    dispatch(fetchSelectedCurrencies(shortName))
  }

  const handleClickCurrency = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement
    const content = target.textContent
    content && setSelectedCurrency(content)
  }
  return (
    <PopUp handleClose={handleClose} title={CURRENCY_TITLE}>
      <>
        <MiniCurrenciesCardBlock>
          {data &&
            data.map((currency) => (
              <MiniCurrenciesCard
                nameFrom={currency.code}
                nameTo={shortName}
                value={currency.value}
                key={currency.code}
              />
            ))}
        </MiniCurrenciesCardBlock>
        <CurrenciesChangeBlock>
          {CURRENCIES_FULLNAME.map((fullnume) => (
            <CurrencyButton
              onClick={handleClickCurrency}
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
