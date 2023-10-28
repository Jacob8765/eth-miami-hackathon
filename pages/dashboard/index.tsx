import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import TrustFund from "../../components/TrustFund";
import { TrustFundProps } from "../../components/TrustFund";
import BurnRate from "../../components/BurnRate";

const mockData: TrustFundProps = {
  recipientName: "Test",
  ethAmount: 2,
  dateCreated: "10-22-2-2",
  walletId: "hey",
};

const Dashboard: NextPage = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5 bg-gray-500 bg-opacity-50">
          <div className="text-beige font-krona text-5xl">Manage Treasury</div>

          <div className="text-beige font-krona text-md">Your Funds</div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              {/* Show the funds the user is a benificiary of */}
              {[1, 2, 3].map((item) => (
                <TrustFund {...mockData} key={item} />
              ))}
            </div>
            <div className="col-span-2">
              <div className="text-beige font-krona text-md">Burn Rate</div>
              <BurnRate />
              <div>
                <div className="text-beige font-krona text-md">
                  Total Value Locked: $6.33
                </div>
                <div className="text-beige font-krona text-md">
                  Total Value Locked: $6.33
                </div>
                <div className="text-beige font-krona text-md">
                  Total Value Locked: $6.33
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-beige font-krona text-md">Activity</div>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="flex h-screen bg-gray-100">
  //       <div className="flex flex-col flex-1 overflow-hidden">
  //         <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
  //           <div className="flex items-center">
  //             <button className="text-gray-500 focus:outline-none lg:hidden">
  //               <svg
  //                 className="h-6 w-6 fill-current"
  //                 viewBox="0 0 24 24"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   d="M4 6h16M4 12h16M4 18h16"
  //                   stroke="currentColor"
  //                   strokeWidth="2"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                 />
  //               </svg>
  //             </button>
  //             <div className="relative mx-4 lg:mx-0">
  //               <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
  //                 <svg
  //                   className="h-6 w-6 fill-current text-gray-500"
  //                   viewBox="0 0 24 24"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path d="M21.414 19.586L16.828 15H15l-.293-.293A6.981 6.981 0 0 0 18 8a7 7 0 1 0-7 7c2.122 0 4.059-.937 5.414-2.414L21.414 19.586zM16 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  //                 </svg>
  //               </span>
  //               <input
  //                 className="form-input block w-full pl-10 pr-4 py-2 rounded-lg leading-5 bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 focus:placeholder-gray-400 focus:shadow-outline-blue sm:text-sm sm:leading-5"
  //                 placeholder="Search"
  //               />
  //             </div>
  //           </div>
  //           <div className="flex items-center">
  //             <div className="relative">
  //               <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
  //                 <img
  //                   className="h-8 w-8 rounded-full"
  //                   src="https://randomuser.me/api/portraits/men/1.jpg"
  //                   alt="Your avatar"
  //                 />
  //               </button>
  //             </div>
  //           </div>
  //         </header>
  //         <div className="flex-1 flex overflow-hidden">
  //           <nav className="flex flex-col bg-gray-200 w-64 px-4 pt-4 pb-6">
  //             <div className="mt-8">
  //               <h3 className="text-xs uppercase font-semibold text-gray-600 tracking-wide">
  //                 Dashboard
  //               </h3>
  //               <ul className="mt-4">
  //                 <li className="relative px-6 py-3">
  //                   <span
  //                     className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
  //                     aria-hidden="true"
  //                   ></span>
  //                   <a
  //                     href="#"
  //                     className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
  //                   >
  //                     <svg
  //                       className="w-5 h-5"
  //                       aria-hidden="true"
  //                       fill="none"
  //                       stroke-linecap="round"
  //                       stroke-linejoin="round"
  //                       stroke-width="2"
  //                       viewBox="0 0 24 24"
  //                       stroke="currentColor"
  //                     >
  //                       <path
  //                         stroke-linecap="round"
  //                         stroke-linejoin="round"
  //                         stroke-width="2"
  //                         d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  //                       ></path>
  //                     </svg>
  //                     <span className="ml-4">Dashboard</span>
  //                   </a>
  //                 </li>
  //                 <li className="relative px-6 py-3">
  //                   <a
  //                     href="#"
  //                     className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
  //                   >
  //                     <svg
  //                       className="w-5 h-5"
  //                       aria-hidden="true"
  //                       fill="none"
  //                       stroke-linecap="round"
  //                       stroke-linejoin="round"
  //                       stroke-width="2"
  //                       viewBox="0 0 24 24"
  //                       stroke="currentColor"
  //                     >
  //                       <path
  //                         stroke-linecap="round"
  //                         stroke-linejoin="round"
  //                         stroke-width="2"
  //                         d="M19 9l-7 7-7-7"
  //                       ></path>
  //                     </svg>
  //                     <span className="ml-4">Messages</span>
  //                   </a>
  //                 </li>
  //                 <li className="relative px-6 py-3">
  //                   <a
  //                     href="#"
  //                     className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
  //                   >
  //                     <svg
  //                       className="w-5 h-5"
  //                       aria-hidden="true"
  //                       fill="none"
  //                       stroke-linecap="round"
  //                       stroke-linejoin="round"
  //                       stroke-width="2"
  //                       viewBox="0 0 24 24"
  //                       stroke="currentColor"
  //                     >
  //                       <path
  //                         stroke-linecap="round"
  //                         stroke-linejoin="round"
  //                         stroke-width="2"
  //                         d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm0 0v8m0-8l.867-2.6A3 3 0 0 0 12 7.4a3 3 0 0 0-3 2.99L9 12m6 0l-1.5-4.5M9 12l1.5-4.5"
  //                       ></path>
  //                     </svg>
  //                     <span className="ml-4">Settings</span>
  //                   </a>
  //                 </li>
  //               </ul>
  //             </div>
  //           </nav>
  //           <main className="flex-1 flex flex-col bg-gray-100 overflow-y-auto">
  //             <div className="mx-6 my-8">
  //               <h3 className="text-gray-700 uppercase text-lg">Sales</h3>
  //               <div className="flex flex-col mt-8">
  //                 <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  //                   <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
  //                     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
  //                       <table className="min-w-full divide-y divide-gray-200">
  //                         <thead>
  //                           <tr>
  //                             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
  //                               Name
  //                             </th>
  //                             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
  //                               Title
  //                             </th>
  //                             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
  //                               Status
  //                             </th>
  //                             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
  //                               Role
  //                             </th>
  //                             <th className="px-6 py-3 bg-gray-50"></th>
  //                           </tr>
  //                         </thead>
  //                         <tbody className="bg-white divide-y divide-gray-200">
  //                           <tr>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <div className="flex items-center">
  //                                 <div className="flex-shrink-0 h-10 w-10">
  //                                   <img
  //                                     className="h-10 w-10 rounded-full"
  //                                     src="https://randomuser.me/api/portraits/women/17.jpg"
  //                                     alt=""
  //                                   />
  //                                 </div>
  //                                 <div className="ml-4">
  //                                   <div className="text-sm leading-5 font-medium text-gray-900">
  //                                     Jane Cooper
  //                                   </div>
  //                                   <div className="text-sm leading-5 text-gray-500">
  //                                     jane.cooper@example.com
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <div className="text-sm leading-5 text-gray-900">
  //                                 Regional Paradigm Technician
  //                               </div>
  //                               <div className="text-sm leading-5 text-gray-500">
  //                                 Optimization
  //                               </div>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
  //                                 Active
  //                               </span>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
  //                               Admin
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
  //                               <a
  //                                 href="#"
  //                                 className="text-indigo-600 hover:text-indigo-900"
  //                               >
  //                                 Edit
  //                               </a>
  //                             </td>
  //                           </tr>
  //                           <tr>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <div className="flex items-center">
  //                                 <div className="flex-shrink-0 h-10 w-10">
  //                                   <img
  //                                     className="h-10 w-10 rounded-full"
  //                                     src="https://randomuser.me/api/portraits/men/11.jpg"
  //                                     alt=""
  //                                   />
  //                                 </div>
  //                                 <div className="ml-4">
  //                                   <div className="text-sm leading-5 font-medium text-gray-900">
  //                                     Cody Fisher
  //                                   </div>
  //                                   <div className="text-sm leading-5 text-gray-500">
  //                                     cody.fisher@example.com
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <div className="text-sm leading-5 text-gray-900">
  //                                 Product Directives Officer
  //                               </div>
  //                               <div className="text-sm leading-5 text-gray-500">
  //                                 Intranet
  //                               </div>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
  //                                 Active
  //                               </span>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
  //                               Owner
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
  //                               <a
  //                                 href="#"
  //                                 className="text-indigo-600 hover:text-indigo-900"
  //                               >
  //                                 Edit
  //                               </a>
  //                             </td>
  //                           </tr>
  //                           <tr>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <div className="flex items-center">
  //                                 <div className="flex-shrink-0 h-10 w-10">
  //                                   <img
  //                                     className="h-10 w-10 rounded-full"
  //                                     src="https://randomuser.me/api/portraits/women/14.jpg"
  //                                     alt=""
  //                                   />
  //                                 </div>
  //                                 <div className="ml-4">
  //                                   <div className="text-sm leading-5 font-medium text-gray-900">
  //                                     Esther Howard
  //                                   </div>
  //                                   <div className="text-sm leading-5 text-gray-500">
  //                                     esther.howard@example.com
  //                                   </div>
  //                                 </div>
  //                               </div>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <div className="text-sm leading-5 text-gray-900">
  //                                 Forward Response Developer
  //                               </div>
  //                               <div className="text-sm leading-5 text-gray-500">
  //                                 Directives
  //                               </div>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap">
  //                               <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
  //                                 Suspended
  //                               </span>
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
  //                               User
  //                             </td>
  //                             <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
  //                               <a
  //                                 href="#"
  //                                 className="text-indigo-600 hover:text-indigo-900"
  //                               >
  //                                 Edit
  //                               </a>
  //                             </td>
  //                           </tr>
  //                         </tbody>
  //                       </table>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </main>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Dashboard;
