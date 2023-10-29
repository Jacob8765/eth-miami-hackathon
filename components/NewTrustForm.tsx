import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect } from "react"

export type IFormValues = {
  amount: number
  recipientAddress: string
  payoutInterval: string
  payoutFrequency: number
}

const NewTrustForm = () => {
  const { control, register, handleSubmit } = useForm<IFormValues>() // Specify the type for useForm

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
  }

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
          <option value="1">Every 1</option>
          <option value="2">Every 2</option>
          <option value="3">Every 3</option>
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
