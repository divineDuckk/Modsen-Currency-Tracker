import { Component } from 'react'

import { CandleStickGraphicWithTheme } from '@/components/CandleStickGraphic'
import { TimeLineButtons } from '@/components/TimeLineButtons'
import { TimeLineDataStucture } from '@/interfaces'
import { chartObserver } from '@/utils/observer'
import { Notification } from '@/components/Notification'

import { MESSAGE } from './constants'
import { TimeLineContainer } from './styled'
import { TimeLineState } from './types'

export class TimeLine extends Component<Record<string, never>, TimeLineState> {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = {
      data: [],
      selectedType: 'Commercial Dollar',
      notificationActive: false,
    }
  }

  setTimeLineData = (
    newState: React.SetStateAction<{ data: TimeLineDataStucture[] }>
  ) => {
    this.setState(newState)
  }
  setSelectedType = (
    newState: React.SetStateAction<{ selectedType: string }>
  ) => {
    this.setState(newState)
  }

  handleNotificationOpen = () => {
    this.setState({ notificationActive: true })
  }
  handleNotificationClose = () => {
    this.setState({ notificationActive: false })
  }
  componentDidMount() {
    chartObserver.subscribe(this.handleNotificationOpen)
  }
  componentDidUpdate(): void {
    console.log(this.state.notificationActive)
  }
  componentWillUnmount() {
    chartObserver.unsubscribe(this.handleNotificationClose)
  }
  render() {
    return (
      <TimeLineContainer>
        <TimeLineButtons
          data={this.state.data}
          setTimeLineData={this.setTimeLineData}
          selectedType={this.state.selectedType}
          setSelectedType={this.setSelectedType}
        />
        <CandleStickGraphicWithTheme
          selectedType={this.state.selectedType}
          data={this.state.data}
        />
        {this.state.notificationActive && (
          <Notification
            message={MESSAGE}
            onClose={this.handleNotificationClose}
          />
        )}
      </TimeLineContainer>
    )
  }
}
