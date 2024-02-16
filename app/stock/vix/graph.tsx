import './graph.scss'

export const VixGraph = () => {
  const data = {
    lastUpdated: {
      epochUnixSeconds: 1707995611,
      humanDate: '2024-02-15T11:13:31.000Z',
    },
    fgi: {
      now: { value: 76, valueText: 'Extreme Greed' },
      previousClose: { value: 73, valueText: 'Greed' },
      oneWeekAgo: { value: 76, valueText: 'Extreme Greed' },
      oneMonthAgo: { value: 73, valueText: 'Greed' },
      oneYearAgo: { value: 73, valueText: 'Greed' },
    },
  }

  return (
    <>
      <div className="w-[400px] h-[200px] border border-[#ccc] rounded-t-full relative overflow-hidden">
        <div className="sector rotate-0 skew-x-[50deg]"></div>
        <div className="sector rotate-[40deg] skew-x-[50deg]"></div>
        <div className="sector rotate-[80deg] skew-x-[70deg]"></div>
        <div className="sector rotate-[100deg] skew-x-[50deg]"></div>
        <div className="sector rotate-[140deg] skew-x-[50deg]"></div>
        <div className="sector-circle" />
      </div>
    </>
  )
}
