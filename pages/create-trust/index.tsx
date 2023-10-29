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

const CreateTrust: NextPage = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5">
          <div className="text-beige font-krona text-5xl mb-5">Create a New Trust</div>

          <div className="bg-darkerPurple blend-color-burn bg-opacity-80 rounded-lg p-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 flex flex-col justify-around gap-4">
                <NewTrustForm />
              </div>
              <div className="col-span-2">
                <BurnRate />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-darkerPurple bg-opacity-80 rounded-lg p-2">
          <div className="text-beige font-krona text-md">Activity</div>
        </div>
      </div>
    </div>
  )
}

export default CreateTrust
