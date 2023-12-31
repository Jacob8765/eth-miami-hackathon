import { ConnectWallet } from "@thirdweb-dev/react"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import { NextPage } from "next"
import Link from "next/link"
import TrustFund from "../../components/TrustFund"
import { TrustFundProps } from "../../components/TrustFund"
import BurnRate from "../../components/BurnRate"
import NewTrustForm from "../../components/NewTrustForm"

const mockData: TrustFundProps = {
  recipientName: "Test",
  ethAmount: 2,
  dateCreated: "10-22-2-2",
  walletId: "hey",
  active: true,
}

const Dashboard: NextPage = () => {
  return (
    <div className="p-10 w-screen h-screen z-[10]">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6">
          <div className="text-beige font-krona text-5xl mb-5">Manage Treasury</div>

          <div className="bg-darkerPurple blend-color-burn bg-opacity-90 rounded-lg p-4">
            <div className="text-beige font-krona text-md mb-2">Your Funds</div>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2 flex flex-col justify-around gap-4">
                {/* Show the funds the user is a benificiary of */}
                {[1, 2, 3, 4].map((item) => (
                  <TrustFund {...mockData} active={item == 1} key={item} />
                ))}
              </div>
              <div className="col-span-3">
                <BurnRate timePeriod="Day" vested={200} payoutAmount={10} interval={2} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-darkerPurple bg-opacity-90 rounded-lg p-2">
          <div className="text-beige font-krona text-md">Activity</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
