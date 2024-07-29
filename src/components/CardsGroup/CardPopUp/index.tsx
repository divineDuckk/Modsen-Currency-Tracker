import {
  AmountOfMoney,
  CurrenciesChangeBlock,
  CurrenciesPopUpCardBlock,
  CurrencyButton,
} from './styled'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import { PopUp } from '@/components/PopUp'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectedCurrencies } from '@/store/selectors/currencies'
import { fetchSelectedCurrencies } from '@/store/thunks/fetchSelectedCurrencies'
import { CURRENCIES_FULLNAME, CURRENCY_TO_SHORTNAME_VOCAB } from '@/constants'

import { CURRENCY_TITLE, DEFAULT_AMOUNT, MAX_INPUT_LENGTH } from './constants'
import { CurrenciesPopUpInfo } from './CurrenciesPopUpInfo'
import { CardPopUpProps, CurrencyKey } from './types'

export const CardPopUp: FC<CardPopUpProps> = ({ currencyInfo, onClose }) => {
  const [selectedCurrecncy, setSelectedCurrency] = useState(
    currencyInfo.fullname
  )
  const [amount, setAmount] = useState(DEFAULT_AMOUNT)
  const shortName =
    CURRENCY_TO_SHORTNAME_VOCAB[selectedCurrecncy as CurrencyKey]
  const data = useAppSelector(selectedCurrencies(shortName))
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (value === '' || /^[1-9]\d*$/.test(value)) {
      setAmount(value)
    }
  }
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      setAmount(DEFAULT_AMOUNT)
    }
  }
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
        <CurrenciesPopUpCardBlock>
          {data?.map(({ code, value }) => {
            const amountOfMoney = value * Number(amount)
            return (
              <CurrenciesPopUpInfo
                nameFrom={code}
                nameTo={shortName}
                value={amountOfMoney}
                key={code}
              />
            )
          })}
          <AmountOfMoney
            value={amount}
            min={DEFAULT_AMOUNT}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={MAX_INPUT_LENGTH}
          />
        </CurrenciesPopUpCardBlock>
        <CurrenciesChangeBlock>
          {CURRENCIES_FULLNAME.map((fullnume) => (
            <CurrencyButton
              onClick={handleClickCurrency(fullnume)}
              $isChoosen={selectedCurrecncy === fullnume}
              key={fullnume}
              data-testid={`switch_${fullnume}`}
            >
              {fullnume}
            </CurrencyButton>
          ))}
        </CurrenciesChangeBlock>
      </>
    </PopUp>
  )
}
