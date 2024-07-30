import mapboxgl from 'mapbox-gl'
import { Component, createRef, RefObject } from 'react'

import { findBanks } from '@/utils/functions'
import { Bank } from '@/interfaces'

import { MOCK_BANKS, MY_LAT, MY_LNG, ZOOM } from './constants'
import { Map } from './styled'
import { MapProps } from './types'

import 'mapbox-gl/dist/mapbox-gl.css'

export class MapBox extends Component<MapProps> {
  map: mapboxgl.Map | undefined
  mapContainer: RefObject<HTMLDivElement>
  markers: mapboxgl.Marker[]

  constructor(props: MapProps) {
    super(props)
    this.mapContainer = createRef()
    this.markers = []
  }

  componentDidMount() {
    if (this.mapContainer.current) {
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [MY_LAT, MY_LNG],
        zoom: ZOOM,
        accessToken: process.env.MAPBOXGL_API_KEY,
      })
    }
  }

  componentDidUpdate(prevProps: MapProps) {
    if (prevProps.currency !== this.props.currency) {
      this.updateBanks()
    }
  }

  componentWillUnmount() {
    this.map!.remove()
  }

  addBanks = (banks: Bank[]) => {
    banks.forEach((bank) => {
      const content = `
        <div>
          <p>${bank.name}</p>
          <p>${bank.currencies.join(', ')}</p>
        </div>
      `
      const marker = new mapboxgl.Marker()
        .setLngLat([bank.coordinate.lat, bank.coordinate.lng])
        .setPopup(new mapboxgl.Popup().setHTML(content))
        .addTo(this.map!)

      this.markers.push(marker)
    })
  }

  updateBanks = () => {
    this.clearBanks()
    this.addBanks(findBanks(this.props.currency, MOCK_BANKS))
  }

  clearBanks = () => {
    this.markers.forEach((marker) => marker.remove())
    this.markers = []
  }

  render() {
    return <Map ref={this.mapContainer}></Map>
  }
}
