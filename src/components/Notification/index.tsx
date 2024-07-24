import { Component } from 'react'
import { createPortal } from 'react-dom'

import { NOTIFICATION_TIME, TIME_TO_CLOSE } from './constants'
import { NotificationContainer, NotificationMessage } from './styled'
import { Props, State } from './types'

export class Notification extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isMounted: false,
      isFadeOut: false,
    }
  }

  componentDidMount(): void {
    this.setState({
      isMounted: true,
    })

    setTimeout(() => {
      this.setState({ isFadeOut: true })
      setTimeout(() => {
        this.props.onClose()
      }, TIME_TO_CLOSE)
    }, NOTIFICATION_TIME)
  }

  render() {
    if (!this.state.isMounted) return null
    return createPortal(
      <NotificationContainer $isFadeOut={this.state.isFadeOut}>
        <NotificationMessage>{this.props.message}</NotificationMessage>
      </NotificationContainer>,
      document.body
    )
  }
}
