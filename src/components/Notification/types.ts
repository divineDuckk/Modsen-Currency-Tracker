export type NotificationProps = {
  onClose: () => void
  message: string
}

export type NotificationState = {
  isMounted: boolean
  isFadeOut: boolean
}
export interface NotificationContainerProps {
  $isFadeOut: boolean
}
