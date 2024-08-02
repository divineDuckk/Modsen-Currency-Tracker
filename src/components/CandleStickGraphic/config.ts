import {
  FONT_SIZE,
  GRAPHIC_PADDING,
  TOOL_TIP_TOFIXED_VALUE,
  Y_TICKS_PADDING,
  Y_TITILE_PADDING,
} from './constants'
import { ChartConfiguration, ScriptableContext, TooltipItem } from 'chart.js'
import { DefaultTheme } from 'styled-components'

import { CustomDataPoint } from '@/interfaces'

import { axes, candleStick, cross } from './plugins'
import 'chartjs-adapter-date-fns'

export const config = (
  theme: DefaultTheme,
  chartData: CustomDataPoint[],
  currency: string = '$'
): ChartConfiguration<'bar', CustomDataPoint[]> => ({
  type: 'bar',
  data: {
    datasets: [
      {
        data: chartData,
        backgroundColor: (ctx: ScriptableContext<'bar'>) => {
          const raw = ctx.raw as CustomDataPoint
          return raw?.c < raw?.o
            ? theme.colors.candleRed
            : theme.colors.candleGreen
        },
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    layout: {
      padding: {
        left: GRAPHIC_PADDING.left,
        bottom: GRAPHIC_PADDING.bottom,
        top: GRAPHIC_PADDING.top,
        right: GRAPHIC_PADDING.right,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          tooltipFormat: 'MMM d, yyyy',
          unit: 'day',
        },
        grid: {
          display: true,
          color: theme.colors.gridGraphic,
        },
        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: 'DAY',
          color: theme.textColor,
          align: 'end',
          font: {
            size: FONT_SIZE,
          },
          padding: Y_TITILE_PADDING,
        },
        offset: true,
      },
      y: {
        position: 'right',
        grid: {
          display: true,
          color: theme.colors.gridGraphic,
        },
        ticks: {
          color: theme.textColor,
          padding: Y_TICKS_PADDING,
          font: {
            size: FONT_SIZE,
          },
        },
        offset: true,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          beforeBody: (ctx: TooltipItem<'bar'>[]) => [
            `O: ${(ctx[0].raw as CustomDataPoint).o.toFixed(
              TOOL_TIP_TOFIXED_VALUE
            )}`,
            `H: ${(ctx[0].raw as CustomDataPoint).h.toFixed(
              TOOL_TIP_TOFIXED_VALUE
            )}`,
            `L: ${(ctx[0].raw as CustomDataPoint).l.toFixed(
              TOOL_TIP_TOFIXED_VALUE
            )}`,
            `C: ${(ctx[0].raw as CustomDataPoint).c.toFixed(
              TOOL_TIP_TOFIXED_VALUE
            )}`,
          ],
          label: () => '',
        },
      },
    },
  },
  plugins: [candleStick, axes(theme), cross(currency)],
})
