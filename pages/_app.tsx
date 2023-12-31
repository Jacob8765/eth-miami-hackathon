import type { AppProps } from "next/app"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import "../styles/globals.css"
import Image from "next/image"

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} activeChain={activeChain}>
      <div className="bg-darkPurple h-screen w-screen">
        <div className="absolute inset-0 flex justify-center items-center z-0 w-screen h-screen">
          <Image className="object-cover w-screen h-screen" width={1755} height={1855} src="./images/circle.svg" alt="" />
        </div>
        <div className=" relative">
          <Component {...pageProps} />
        </div>
      </div>
    </ThirdwebProvider>
  )
}

export default MyApp
