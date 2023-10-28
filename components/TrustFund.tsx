import React from "react";

export interface TrustFundProps {
  recipientName: string;
  ethAmount: number;
  dateCreated: string;
  walletId: string;
}

const TrustFund = ({
  recipientName,
  ethAmount,
  dateCreated,
  walletId,
}: TrustFundProps) => {
  return (
    <div className="rounded-[30px] border border-[#A47FDF] flex bg-[#D9D9D9] shadow-md max-h-[132px] max-w-[613px]">
      <div className="flex flex-col justify-center align-bottom px-10">
        <h1 className="text-[91] font-nats">{recipientName}</h1>
        <h2 className="text-lg font-nats">{ethAmount} ETH</h2>
        <h3 className="text-md font-nats">Date Created: {dateCreated}</h3>
      </div>
      <div className="py-[36px] pr-[20px]">
        <div className="rounded-[20px] border border-[#5F15D9] bg-[#5D3D92] shadow-md flex w-[202.932px] h-[58.387px] flex-col justify-center flex-shrink-0">
          <h3 className="text-white text-center font-NATS text-[20px] font-normal">
            {walletId}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TrustFund;
