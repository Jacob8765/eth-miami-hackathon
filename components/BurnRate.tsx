import React from "react"
import Chart from "./Chart"

interface BurnRateProps {}

const BurnRate = ({}: BurnRateProps) => {
  return (
    <div className="border border-beige bg-darkerPurple bg-opacity-80 rounded-md p-2">
      <div className="text-beige font-krona text-xl">Burn Rate</div>
      <Chart />
      <div>
        <div className="text-beige font-krona text-md">Total Value Locked: $6.33</div>
        <div className="text-beige font-krona text-md">Total Value Locked: $6.33</div>
        <div className="text-beige font-krona text-md">Total Value Locked: $6.33</div>
      </div>
    </div>
  )
}

export default BurnRate
