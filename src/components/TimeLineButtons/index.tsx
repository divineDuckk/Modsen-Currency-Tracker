import {
  AddDataButton,
  ClearDataButton,
  InformationInput,
  ManageBlockWrapper,
  ManageButtonsWrapper,
  RandomButton,
  Selector,
  SelectorOption,
} from './styled'
import {
  isNeedToUpdateState,
  MAX_GENERATE_VALUE,
  MIN_GENERATE_VALUE,
  MIN_VALUE,
  PLACEHOLDERS,
} from './constants'
import { Component } from 'react'

import { getRandomChartData } from '@/utils/functions'
import { CURRENCIES_FULLNAME } from '@/constants'

import { TimeLineButtonsProps, TimeLineButtonsState } from './types'

export class TimeLineButtons extends Component<
  TimeLineButtonsProps,
  TimeLineButtonsState
> {
  constructor(props: TimeLineButtonsProps) {
    super(props)
    this.state = {
      date: '',
      open: '',
      close: '',
      low: '',
      high: '',
    }
  }
  getRandomData = () => {
    this.props.setTimeLineData({
      data: getRandomChartData(MIN_GENERATE_VALUE, MAX_GENERATE_VALUE),
    })
  }
  addData = () => {
    const { date, open, close, low, high } = this.state
    if (date === '' || open === '' || close === '' || low === '' || high === '')
      return
    if (!isNeedToUpdateState(this.props.data, date)) return
    this.props.setTimeLineData((prev) => ({
      data: [
        ...prev.data,
        {
          date: date,
          open: Number(open),
          close: Number(close),
          low: Number(low),
          high: Number(high),
        },
      ],
    }))
  }
  clearData = () => {
    this.setState({
      date: '',
      open: '',
      close: '',
      low: '',
      high: '',
    })
    this.props.setTimeLineData({ data: [] })
  }
  handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    this.setState({ date: value })
  }

  handleOpenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      this.setState({ open: value })
    }
  }
  handleCloseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      this.setState({ close: value })
    }
  }

  handleLowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      this.setState({ low: value })
    }
  }
  handleHighChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      this.setState({ high: value })
    }
  }
  handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.setSelectedType({ selectedType: event.target.value })
  }
  render() {
    const { date, open, close, low, high } = this.state

    return (
      <>
        <ManageBlockWrapper>
          <InformationInput
            type="date"
            value={date}
            onChange={this.handleDateChange}
            data-testid="timeline_date"
          />
          <InformationInput
            min={MIN_VALUE}
            value={open}
            onChange={this.handleOpenChange}
            placeholder={PLACEHOLDERS.open}
            data-testid="timeline_open"
          />
          <InformationInput
            min={MIN_VALUE}
            value={close}
            onChange={this.handleCloseChange}
            placeholder={PLACEHOLDERS.close}
            data-testid="timeline_close"
          />
          <InformationInput
            min={MIN_VALUE}
            value={low}
            onChange={this.handleLowChange}
            placeholder={PLACEHOLDERS.low}
            data-testid="timeline_low"
          />
          <InformationInput
            min={MIN_VALUE}
            value={high}
            onChange={this.handleHighChange}
            placeholder={PLACEHOLDERS.high}
            data-testid="timeline_high"
          />
          <Selector
            disabled={this.props.data.length !== 0}
            value={this.props.selectedType}
            onChange={this.handleTypeChange}
            data-testid="timeline_selector"
          >
            {CURRENCIES_FULLNAME.map((currency) => (
              <SelectorOption
                key={currency}
                value={currency}
                data-testid={`timeline_options_${currency}`}
              >
                {currency}
              </SelectorOption>
            ))}
          </Selector>
        </ManageBlockWrapper>
        <ManageButtonsWrapper>
          <AddDataButton data-testid="timeline_add" onClick={this.addData}>
            Add
          </AddDataButton>
          <ClearDataButton
            data-testid="timeline_clear"
            onClick={this.clearData}
          >
            Clear
          </ClearDataButton>
          <RandomButton
            data-testid="timeline_random"
            onClick={this.getRandomData}
          >
            Random
          </RandomButton>
        </ManageButtonsWrapper>
      </>
    )
  }
}
