import { Component } from 'react'

import { MapBox } from '@/components/Map'
import { Search } from '@/components/Search'
import { CURRENCY_TO_SHORTNAME_VOCAB } from '@/constants'
import { SYMBOLS_TYPE } from '@/types'

import { BankCardContainer } from './styled'
import { BankCardState } from './types'

export class BankCard extends Component<Record<string, never>, BankCardState> {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = { currency: '' }
  }
  setCurrency = (newState: React.SetStateAction<{ currency: string }>) => {
    this.setState(newState)
  }

  render() {
    const currencyShortName =
      CURRENCY_TO_SHORTNAME_VOCAB[this.state.currency as SYMBOLS_TYPE]
    return (
      <BankCardContainer data-testid="bank">
        <Search setCurrency={this.setCurrency} currency={this.state.currency} />
        <MapBox currency={currencyShortName} />
      </BankCardContainer>
    )
  }
}
