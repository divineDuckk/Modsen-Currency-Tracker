interface Coordinate {
  lng: number
  lat: number
}
export interface Bank {
  id: number
  name: string
  currencies: string[]
  coordinate: Coordinate
}
