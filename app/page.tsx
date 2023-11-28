'use client'
import { AdvancedRealTimeChart } from '@/features/chart'
import { Robot, Walk, WalkScroll, WalkScroll2 } from '@/lotties/walk'
import { useEffect, useRef } from 'react'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const onWheel = (e: any) => {
    e.preventDefault()

    if (contentRef.current) {
      contentRef.current.scrollLeft += e.deltaY
    }
  }

  // useEffect(() => {
  //   const elem = contentRef.current
  //   if (elem) elem.addEventListener('wheel', onWheel, { passive: false })
  //   return () => elem?.removeEventListener('wheel', onWheel)
  // }, [])

  return (
    <main>
      {/* <AdvancedRealTimeChart /> */}
      {/* <Walk /> */}
      <div
        className="flex flex-col gap-0 w-full h-screen overflow-scroll no-scrollbar"
        ref={contentRef}
      >
        <div className="w-[100vw] flex-shrink-0 h-full bg-red-50 text-body-4 text-black">
          <AdvancedRealTimeChart />
        </div>
        {/* <div className="w-[100vw] flex-shrink-0 h-full bg-red-200">
          <Walk />
        </div> */}
      </div>
      <WalkScroll2 />

      {/* <Robot /> */}
    </main>
  )
}
