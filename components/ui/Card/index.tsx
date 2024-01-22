export function Card() {
  return (
    <div className="w-[500px] h-[630px] rounded-[32px] bg-white">
      <div className="flex flex-col rounded-t-[32px] h-[170px] bg-[#ff6060] p-16">
        <div className="flex justify-between items-end">
          <div className="w-30 h-1 border-b-2 border-white" />
          <div className="rounded-full bg-black text-white w-50 h-50 flex justify-center items-center">
            2024
          </div>
        </div>
        <h3 className="text-26 leading-[40px] font-bold">TITLE</h3>
        <h4 className="text-14 leading-[22px] font-semibold">SUBTITLE</h4>
        {}
      </div>
    </div>
  )
}
