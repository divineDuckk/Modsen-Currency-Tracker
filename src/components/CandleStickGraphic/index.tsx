import { Chart, registerables } from 'chart.js'
import { Component, createRef } from 'react'
import { withTheme } from 'styled-components'

import { CustomDataPoint } from '@/interfaces'
import { timeLineDataToChartData } from '@/utils/functions'
import { HISTORY_MOCK_DATA } from '@/constants'

import { config } from './config'
import { MAX_DAYS_VALUE } from './constants'
import { ChartBox, GraphicCanvas } from './styled'
import { CandleStickGraphicProps } from './types'

class CandleStickGraphic extends Component<CandleStickGraphicProps> {
  chartRef = createRef<HTMLCanvasElement>()
  chartInstance: Chart<'bar', CustomDataPoint[]> | undefined
  componentDidMount() {
    this.createChart()
  }
  componentDidUpdate(prevProps: CandleStickGraphicProps) {
    if (
      prevProps.theme !== this.props.theme ||
      prevProps.data.length !== this.props.data.length ||
      this.props.data.length === MAX_DAYS_VALUE
    ) {
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
          this.props.data.length
            ? timeLineDataToChartData(this.props.data)
            : HISTORY_MOCK_DATA
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
