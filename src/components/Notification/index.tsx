import { Component } from 'react'
import { createPortal } from 'react-dom'

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
      }, 500)
    }, 3000)
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
