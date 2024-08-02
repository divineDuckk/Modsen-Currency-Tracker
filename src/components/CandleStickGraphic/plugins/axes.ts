import { Plugin } from 'chart.js'
import { DefaultTheme } from 'styled-components'

import { FONT_SIZE } from '@/components/CandleStickGraphic/constants'

export const axes = (theme: DefaultTheme): Plugin<'bar'> => ({
  id: 'axes',
  beforeDatasetsDraw(chart) {
    const { ctx, chartArea } = chart

    if (!ctx) return

    const offset = 30

    ctx.save()
    ctx.lineWidth = 3
    ctx.strokeStyle = theme.textColor
    ctx.font = `${FONT_SIZE}px Arial`

    ctx.beginPath()
    ctx.moveTo(chartArea.left - offset, chartArea.top)
    ctx.lineTo(chartArea.left - offset, chartArea.bottom + offset * 2)
    ctx.stroke()

    ctx.fillStyle = theme.textColor
    ctx.textAlign = 'center'
    ctx.fillText('Value', chartArea.left - offset, 15)

    ctx.beginPath()
    ctx.moveTo(chartArea.left - offset, chartArea.bottom + offset * 2)
    ctx.lineTo(chartArea.right + 10, chartArea.bottom + offset * 2)
    ctx.stroke()

    ctx.restore()
  },
})
