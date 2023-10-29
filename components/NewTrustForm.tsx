import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect } from "react"

export type IFormValues = {
  amount: number
  recipientAddress: string
  payoutInterval: string
  payoutFrequency: number
}

const defaultValues: IFormValues = {
  amount: 0,
  recipientAddress: "",
  payoutInterval: "week",
  payoutFrequency: 1,
}

const NewTrustForm = () => {
  const { control, register, handleSubmit, watch } = useForm<IFormValues>({ defaultValues }) // Specify the type for useForm

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
  }

  const payoutInterval = watch("payoutInterval")

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="text-lg text-beige">
          Amount (ETH)
        </label>
        <input type="text" {...register("amount")} className="border rounded p-2 w-full mb-2" placeholder="1.0000" />

        <label htmlFor="recipientAddress" className="text-lg text-beige">
          Recipient Address
        </label>
        <input type="text" {...register("recipientAddress")} className="border rounded p-2 w-full mb-2" placeholder="Recipient Address" />

        <label htmlFor="payoutInterval" className="text-lg text-beige">
          Payout Interval
        </label>
        <select {...register("payoutInterval")} className="border rounded p-2 w-full mb-2">
          <option value="week">Week</option>
          <option value="month">Month</option>
          {/* Add more options as needed for different payout intervals */}
        </select>

        <label htmlFor="payoutFrequency" className="text-lg text-beige">
          Payout Frequency
        </label>
        <select {...register("payoutFrequency")} className="border rounded p-2 w-full">
          {
            // Generate the options based on the payout interval
            // For example, if the payout interval is week, then generate 1-7
            // If the payout interval is month, then generate 1-30
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <option value={item}>
                Every {item} {payoutInterval}
              </option>
            ))
          }
          {/* Add more options for different payout frequencies */}
        </select>

        <div className="flex justify-center mt-3">
          <button type="submit">
            <div className="rounded-lg border border-[#5F15D9] bg-[#5D3D92] shadow-md px-10 py-1">
              <h3 className="text-beige text-center font-nats text-2xl">Confirm</h3>
            </div>
          </button>
        </div>
      </form>
    </>
  )
}

export default NewTrustForm
