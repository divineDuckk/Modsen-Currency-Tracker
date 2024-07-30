import {
  Hint,
  HintElem,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  SearchTitle,
  SearchContainer,
} from './styled'
import { ChangeEvent, Component } from 'react'

import { CURRENCIES_FULLNAME } from '@/constants'

import { SearchProps, SearchState } from './types'

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)
    this.state = { isHintShow: false, currencies: [] }
  }
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    this.props.setCurrency({ currency: inputValue })

    let filtredCurrencies = CURRENCIES_FULLNAME.filter((currency) =>
      currency.toLowerCase().includes(inputValue.toLowerCase())
    )
    if (inputValue === '') filtredCurrencies = []
    this.setState({ currencies: filtredCurrencies })
    if (filtredCurrencies.length !== 0) this.setState({ isHintShow: true })
    else this.setState({ isHintShow: false })
  }
  handleLiClick = (currency: string) => () => {
    this.props.setCurrency({ currency: currency })
    this.setState({ isHintShow: false })
  }
  render() {
    return (
      <>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <SearchContainer>
          <SearchInputContainer>
            <SearchInput
              placeholder="Сurrency search..."
              onChange={this.handleChange}
              value={this.props.currency}
            />
            <SearchIcon />
          </SearchInputContainer>
          {this.state.isHintShow && (
            <Hint>
              {this.state.currencies.map((currency) => (
                <HintElem onClick={this.handleLiClick(currency)} key={currency}>
                  {currency}
                </HintElem>
              ))}
            </Hint>
          )}
        </SearchContainer>
      </>
    )
  }
}
