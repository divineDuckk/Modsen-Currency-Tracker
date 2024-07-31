import mapboxgl from 'mapbox-gl'
import { Component, createRef, RefObject } from 'react'

import { findBanks } from '@/utils/functions'
import { Bank } from '@/interfaces'

import { MY_LAT, MY_LNG, ZOOM } from './constants'
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
        center: [MY_LNG, MY_LAT],
        zoom: ZOOM,
        accessToken: process.env.MAPBOXGL_API_KEY,
      })
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myLat = position.coords.latitude
        const myLng = position.coords.longitude
        if (this.map) {
          this.map.setCenter([myLng, myLat])
        }
      })
    }
  }

  componentDidUpdate(prevProps: MapProps) {
    if (prevProps.currency !== this.props.currency) {
      this.updateBanks()
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove()
    }
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
    this.addBanks(findBanks(this.props.currency))
  }

  clearBanks = () => {
    this.markers.forEach((marker) => marker.remove())
    this.markers = []
  }

  render() {
    return <Map ref={this.mapContainer}></Map>
  }
}
