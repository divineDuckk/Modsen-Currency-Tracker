import {
  AddDataButton,
  ClearDataButton,
  Close,
  DateInput,
  High,
  Low,
  ManageBlockWrapper,
  ManageButtonsWrapper,
  Open,
  RandomButton,
  TimeLineContainer,
} from './styled'
import {
  MAX_GENERATE_VALUE,
  MIN_GENERATE_VALUE,
  MIN_VALUE,
  PLACEHOLDERS,
} from './constants'
import { Component } from 'react'

import { CandleStickGraphicWithTheme } from '@/components/CandleStickGraphic'
import { getRandomChartData } from '@/utils/functions'

import { TimeLineState } from './types'

export class TimeLine extends Component<Record<string, never>, TimeLineState> {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = { data: [], date: '', open: '', close: '', low: '', high: '' }
  }
  getRandomData = () => {
    this.setState({
      data: getRandomChartData(MIN_GENERATE_VALUE, MAX_GENERATE_VALUE),
    })
  }
  addData = () => {
    const { data, date, open, close, low, high } = this.state
    if (date === '' || open === '' || close === '' || low === '' || high === '')
      return

    if (data.some((item) => item.date === date)) return

    this.setState({
      data: [
        ...data,
        {
          date: date,
          open: Number(open),
          close: Number(close),
          low: Number(low),
          high: Number(high),
        },
      ],
    })
  }
  clearData = () => {
    this.setState({})
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

  render() {
    const { date, open, close, low, high } = this.state
    return (
      <TimeLineContainer>
        <ManageBlockWrapper>
          <DateInput
            type="date"
            value={date}
            onChange={this.handleDateChange}
          />
          <Open
            min={MIN_VALUE}
            value={open}
            onChange={this.handleOpenChange}
            placeholder={PLACEHOLDERS.open}
          />
          <Close
            min={MIN_VALUE}
            value={close}
            onChange={this.handleCloseChange}
            placeholder={PLACEHOLDERS.close}
          />
          <Low
            min={MIN_VALUE}
            value={low}
            onChange={this.handleLowChange}
            placeholder={PLACEHOLDERS.low}
          />
          <High
            min={MIN_VALUE}
            value={high}
            onChange={this.handleHighChange}
            placeholder={PLACEHOLDERS.high}
          />
        </ManageBlockWrapper>
        <ManageButtonsWrapper>
          <AddDataButton onClick={this.addData}>Add</AddDataButton>
          <ClearDataButton onClick={this.clearData}>Clear</ClearDataButton>
          <RandomButton onClick={this.getRandomData}>Random</RandomButton>
        </ManageButtonsWrapper>
        <CandleStickGraphicWithTheme data={this.state.data} />
      </TimeLineContainer>
    )
  }
}
