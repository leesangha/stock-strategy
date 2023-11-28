'use client'

import dynamic from 'next/dynamic'
const AdvancedRealTimeChartComponent = dynamic(
  () =>
    import('react-ts-tradingview-widgets').then(w => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
)

export const AdvancedRealTimeChart = () => (
  <AdvancedRealTimeChartComponent theme="dark" />
)
