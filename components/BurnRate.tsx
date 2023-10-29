import React from "react"
import Chart from "./Chart"

interface BurnRateProps {
  timePeriod: string
  interval: number
  payoutAmount: number
  vested: number
}

const BurnRate = ({ interval, payoutAmount, vested, timePeriod }: BurnRateProps = { timePeriod: "Day", interval: 1, payoutAmount: 2, vested: 200 }) => {
  return (
    <div className="border border-beige bg-darkerPurple rounded-md p-2">
      <div className="text-beige font-krona text-xl">Burn Rate</div>
      <div className="p-2">
        <Chart interval={interval} payoutAmount={payoutAmount} timePeriod={timePeriod} vested={vested} />
        <div className="mt-3">
          <div className="text-beige font-krona text-sm">
            Total Value Locked: <span className="float-right">$521.64</span>
          </div>
          <div className="text-beige font-krona text-sm">
            Date of Final Payment: <span className="float-right">October 5th, 2025</span>
          </div>
          <div className="text-beige font-krona text-sm">
            Disbursement Peroid: <span className="float-right">Daily</span>
          </div>
          <div className="text-beige font-krona text-sm">
            Amount: <span className="float-right">$6.33</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurnRate
