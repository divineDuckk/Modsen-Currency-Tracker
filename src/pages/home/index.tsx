import { useEffect } from 'react'

import { Card } from '@/components/CardsGroup/Card'
import { CardsGroup } from '@/components/CardsGroup'
import { STOCKS } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { currencies } from '@/store/selectors/currencies'
import { fetchCurrencies } from '@/store/thunks/fetchCurrencies'

import { Category, Main } from './styled'

export const Home = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(currencies)
  useEffect(() => {
    data.length === 0 && dispatch(fetchCurrencies())
  }, [])
  return (
    <Main>
      <Category>Stocks</Category>
      <CardsGroup>
        {STOCKS.map((el) => (
          <Card name={el.name} value={el.value} key={el.name} />
        ))}
      </CardsGroup>
      <Category>Quotes</Category>
      <CardsGroup>
        {data.map((el) => (
          <Card name={el.code} value={el.value} key={el.code} />
        ))}
      </CardsGroup>
    </Main>
  )
}
