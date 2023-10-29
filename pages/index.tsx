import { ConnectWallet } from "@thirdweb-dev/react"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="bg-darkPurple h-screen w-screen flex flex-col justify-center items-center justify-around">
      <div className="text-beige font-krona text-6xl z-[10]">DeFi Trust Funds</div>
      <div className="flex flex-col gap-10 text-center justify-center z-[10]">
        <Link href="/dashboard">
          <div className="rounded-full bg-beige py-4 px-2">
            <h1 className="text-2xl text-black font-krona">Dashboard</h1>
          </div>
        </Link>
        <Link href="/create-trust">
          <div className="rounded-full bg-beige py-4 px-5">
            <h1 className="text-2xl text-black font-krona">Make a Trust Fund</h1>
          </div>
        </Link>
      </div>
      <div className="fixed z-[2]">
        <Image width={1755} height={1755} src="./images/circle.svg" alt=""></Image>
      </div>
    </div>
  )
  // return (
  //   <main className={styles.main}>
  //     <div className={styles.container}>
  //       <div className={styles.header}>
  //         <h1 className={styles.title}>
  //           Welcome to{" "}
  //           <span className={styles.gradientText0}>
  //             <a
  //               href="https://thirdweb.com/"
  //               target="_blank"
  //               rel="noopener noreferrer"
  //             >
  //               thirdweb.
  //             </a>
  //           </span>
  //         </h1>

  //         <p className={styles.description}>
  //           Get started by configuring your desired network in{" "}
  //           <code className={styles.code}>src/index.js</code>, then modify the{" "}
  //           <code className={styles.code}>src/App.js</code> file!
  //         </p>

  //         <div className={styles.connect}>
  //           <ConnectWallet
  //             dropdownPosition={{
  //               side: "bottom",
  //               align: "center",
  //             }}
  //           />
  //         </div>
  //       </div>

  //       <div className={styles.grid}>
  //         <a
  //           href="https://portal.thirdweb.com/"
  //           className={styles.card}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             src="/images/portal-preview.png"
  //             alt="Placeholder preview of starter"
  //             width={300}
  //             height={200}
  //           />
  //           <div className={styles.cardText}>
  //             <h2 className={styles.gradientText1}>Portal ➜</h2>
  //             <p>
  //               Guides, references, and resources that will help you build with
  //               thirdweb.
  //             </p>
  //           </div>
  //         </a>

  //         <a
  //           href="https://thirdweb.com/dashboard"
  //           className={styles.card}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             src="/images/dashboard-preview.png"
  //             alt="Placeholder preview of starter"
  //             width={300}
  //             height={200}
  //           />
  //           <div className={styles.cardText}>
  //             <h2 className={styles.gradientText2}>Dashboard ➜</h2>
  //             <p>
  //               Deploy, configure, and manage your smart contracts from the
  //               dashboard.
  //             </p>
  //           </div>
  //         </a>

  //         <a
  //           href="https://thirdweb.com/templates"
  //           className={styles.card}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             src="/images/templates-preview.png"
  //             alt="Placeholder preview of templates"
  //             width={300}
  //             height={200}
  //           />
  //           <div className={styles.cardText}>
  //             <h2 className={styles.gradientText3}>Templates ➜</h2>
  //             <p>
  //               Discover and clone template projects showcasing thirdweb
  //               features.
  //             </p>
  //           </div>
  //         </a>
  //       </div>
  //     </div>
  //   </main>
  // );
}

export default Home
