import { Chart, Plugin, TooltipModel } from 'chart.js'

import { CustomDataPoint } from '@/interfaces'
import { FONT_SIZE } from '@/components/CandleStickGraphic/constants'

export const cross = (currency: string): Plugin<'bar'> => ({
  id: 'cross',
  afterDatasetsDraw(chart: Chart<'bar'>) {
    const {
      ctx,
      tooltip,
      chartArea: { left, right },
      scales: { y },
      canvas,
    } = chart

    const activeTooltip = tooltip as TooltipModel<'bar'> & {
      _active: unknown[]
    }

    if (
      activeTooltip &&
      activeTooltip._active &&
      activeTooltip._active.length
    ) {
      ctx.setLineDash([3, 3])
      ctx.lineWidth = 2
      ctx.strokeStyle = '#FF971E'

      const lines = (
        startX: number,
        startY: number,
        endX: number,
        endY: number
      ) => {
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
        ctx.closePath()
      }

      const raw = activeTooltip.dataPoints[0].raw as CustomDataPoint

      lines(left, y.getPixelForValue(raw.c), right, y.getPixelForValue(raw.c))
      ctx.setLineDash([])

      ctx.beginPath()
      ctx.fillStyle = '#FF971E'

      const xA = right + 5
      const yValue = raw.c
      const yA = y.getPixelForValue(yValue) - 23
      const width = left + 60
      const height = 40
      const cornerRadius = 5

      ctx.beginPath()
      ctx.moveTo(xA + cornerRadius, yA)
      ctx.lineTo(xA + width - cornerRadius, yA)
      ctx.arcTo(xA + width, yA, xA + width, yA + cornerRadius, cornerRadius)
      ctx.lineTo(xA + width, yA + height - cornerRadius)
      ctx.arcTo(
        xA + width,
        yA + height,
        xA + width - cornerRadius,
        yA + height,
        cornerRadius
      )
      ctx.lineTo(xA + cornerRadius, yA + height)
      ctx.arcTo(xA, yA + height, xA, yA + height - cornerRadius, cornerRadius)
      ctx.lineTo(xA, yA + cornerRadius)
      ctx.arcTo(xA, yA, xA + cornerRadius, yA, cornerRadius)
      ctx.closePath()

      ctx.fill()

      ctx.fillStyle = 'black'
      ctx.font = `bold ${FONT_SIZE}px Arial`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(
        `${currency} ` + raw.c.toFixed(2),
        right + 65,
        y.getPixelForValue(raw.c)
      )

      canvas.style.cursor = 'crosshair'
    } else {
      canvas.style.cursor = 'default'
    }
  },
})
