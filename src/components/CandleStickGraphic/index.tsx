import {
  areTimeLineDataEqual,
  timeLineDataToChartData,
} from '@/utils/functions'
import { Chart, registerables } from 'chart.js'
import { Component, createRef } from 'react'
import { withTheme } from 'styled-components'

import { CustomDataPoint } from '@/interfaces'
import { FULLNAME_TO_CURRENCIES_SYMBOLS } from '@/constants'
import { chartObserver } from '@/utils/observer'

import { config } from './config'
import { ChartBox, GraphicCanvas } from './styled'
import { CandleStickGraphicProps } from './types'

class CandleStickGraphic extends Component<CandleStickGraphicProps> {
  chartRef = createRef<HTMLCanvasElement>()
  chartInstance: Chart<'bar', CustomDataPoint[]> | undefined

  componentDidMount() {
    this.createChart()
  }

  componentDidUpdate(prevProps: CandleStickGraphicProps) {
    const themeChanged = prevProps.theme !== this.props.theme
    if (
      themeChanged ||
      !areTimeLineDataEqual(prevProps.data, this.props.data)
    ) {
      chartObserver.notify(true)
      this.updateChart()
    }
  }

  componentWillUnmount() {
    this.destroyChart()
  }

  createChart = () => {
    Chart.register(...registerables)

    if (this.chartRef.current) {
      this.chartInstance = new Chart(
        this.chartRef.current,
        config(
          this.props.theme,
          timeLineDataToChartData(this.props.data),
          FULLNAME_TO_CURRENCIES_SYMBOLS[this.props.selectedType]
        )
      )
    }
  }

  updateChart = () => {
    this.destroyChart()
    this.createChart()
  }

  destroyChart = () => {
    if (this.chartInstance) {
      this.chartInstance.destroy()
      this.chartInstance = undefined
    }
  }

  render() {
    return (
      <ChartBox>
        <GraphicCanvas ref={this.chartRef} />
      </ChartBox>
    )
  }
}

export const CandleStickGraphicWithTheme = withTheme(
  CandleStickGraphic
) as React.ComponentType<Omit<CandleStickGraphicProps, 'theme'>>
