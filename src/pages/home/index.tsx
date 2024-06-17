import { Card } from '@/components/CardsGroup/Card'
import { CardsGroup } from '@/components/CardsGroup'
import { MOCK_DATA, STOCKS } from '@/constants'
import { CurrencyData } from '@/interfaces'

import { Category, Main } from './styled'

export const Home = () => {
  const data: CurrencyData[] = Object.values(MOCK_DATA['data'])
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
