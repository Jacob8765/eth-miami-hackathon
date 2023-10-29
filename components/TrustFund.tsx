import React from "react"

export interface TrustFundProps {
  recipientName: string
  ethAmount: number
  dateCreated: string
  walletId: string
}

const TrustFund = ({ recipientName, ethAmount, dateCreated, walletId }: TrustFundProps) => {
  return (
    <div className="rounded-lg bg-beige p-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-nats leading-5">{recipientName}</p>
          <p className="text-2xl font-nats">{ethAmount} ETH</p>
          <p className="text-md font-nats">Date Created: {dateCreated}</p>
        </div>
        <div className="rounded-lg border border-[#5F15D9] bg-[#5D3D92] shadow-md px-5 py-2">
          <h3 className="text-beige text-center font-nats text-xl">View Details</h3>
        </div>
      </div>
    </div>
  )
}

export default TrustFund
