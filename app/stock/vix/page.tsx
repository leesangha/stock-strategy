import { VixGraph } from './graph'

export default async function StockPage() {
  return (
    <div className="w-full h-screen p-4">
      {/* <h3 className="mb-10">Vix 지수</h3> */}
      <VixGraph />
    </div>
  )
}
