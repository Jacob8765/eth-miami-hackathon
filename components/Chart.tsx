import React from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface DataPoint {
  x: string // Date (e.g., "2023-10-27")
  y: number // Remaining amount on that day
}

function generateBurndownData(interval: string, amount: number, vested: number): DataPoint[] {
  const data: DataPoint[] = []
  let remaining = vested

  // Calculate the number of days based on the interval
  const intervalInDays = interval === "day" ? 1 : interval === "week" ? 7 : 30 // Adjust as needed

  for (let day = 0; day <= 30; day++) {
    if (remaining < 0) {
      break
    }
    // Assuming a month's worth of data
    if (day % intervalInDays === 0) {
      data.push({ x: `2023-10-${27 + day}`, y: remaining })
    }
    remaining -= amount
  }

  return data
}

const interval = "day"
const amount = 2
const vested = 10

const data = generateBurndownData(interval, amount, vested)

const Chart = () => {
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
