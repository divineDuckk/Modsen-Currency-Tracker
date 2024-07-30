import { useEffect } from 'react'

import { Card } from '@/components/CardsGroup/Card'
import { CardsGroup } from '@/components/CardsGroup'
import { STATUS, STOCKS } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { currencies, currentStatus } from '@/store/selectors/currencies'
import { fetchCurrencies } from '@/store/thunks/fetchCurrencies'
import { Loader, LoaderContainer } from '@/components/Loader/styled'

import { Category, Main } from './styled'

export const Home = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(currencies)
  const status = useAppSelector(currentStatus)
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchCurrencies())
    }
  }, [])
  return (
    <Main data-testid="main">
      {status === STATUS.pending ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <>
          <Category>Stocks</Category>
          <CardsGroup>
            {STOCKS.map(({ name, value }) => (
              <Card name={name} value={value} key={name} />
            ))}
          </CardsGroup>
          <Category>Quotes</Category>
          <CardsGroup>
            {data.map(({ code, value }) => (
              <Card name={code} value={value} key={code} />
            ))}
          </CardsGroup>
        </>
      )}
    </Main>
  )
}
