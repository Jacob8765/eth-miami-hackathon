import React from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import { time } from "console"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface DataPoint {
  x: string // Date (e.g., "2023-10-27")
  y: number // Remaining amount on that day
}

function generateBurndownData(timePeriod: string, interval: number, payoutAmount: number, vested: number): DataPoint[] {
  const data: DataPoint[] = []
  let remaining = vested

  // Calculate the number of days based on the interval
  const intervalInDays = (timePeriod === "Day" ? 1 : timePeriod === "Week" ? 7 : 30) * interval // Adjust as needed

  for (let day = 0; day <= 30; day++) {
    if (remaining < 0) {
      break
    }
    // Assuming a month's worth of data
    if (day % intervalInDays === 0) {
      data.push({ x: `2023-10-${27 + day}`, y: remaining })
    }
    remaining -= payoutAmount
  }

  return data
}

// const interval = "day"
// const amount = 2
// const vested = 10

const Chart = ({ interval, payoutAmount, vested, timePeriod }: { timePeriod: string; payoutAmount: number; vested: number; interval: number }) => {
  const data = generateBurndownData(timePeriod, interval, payoutAmount, vested)

  const chartData = {
    labels: data.map((point) => point.x),
    datasets: [
      {
        label: "Remaining Funds (ETH)",
        data: data.map((point) => point.y),
        borderColor: "white",
        fill: false,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        color: "white",
        labels: {
          color: "white",
        },
      },

      // title:
      //   display: true,
      //   text: "Chart.js Line Chart",
      // },
    },
  }

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default Chart
