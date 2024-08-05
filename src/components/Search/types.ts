export interface SearchState {
  isHintShow: boolean
  currencies: string[]
}
export interface SearchProps {
  setCurrency: React.Dispatch<React.SetStateAction<{ currency: string }>>
  currency: string
}
