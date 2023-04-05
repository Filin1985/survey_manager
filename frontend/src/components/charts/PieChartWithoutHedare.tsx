import React from "react"
import cn from "classnames"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
} from "recharts"
import styles from "./charts.module.scss"

type TDataChart = {
  initialDepth: number
  currentDepth: number
  planDepth: number
}

const PieChartWithoutHeader: React.FC<TDataChart> = ({
  initialDepth,
  currentDepth,
  planDepth,
}) => {
  const data = [
    { name: "Пробурено", value: planDepth - initialDepth },
    { name: "Осталось", value: planDepth - currentDepth },
  ]

  const value = Math.ceil(
    (data[0].value / data.reduce((acc, cur) => acc + cur.value, 0)) * 100
  )

  const COLORS = ["#00C49F", "#FF8042"]
  return (
    <div style={{ marginTop: "25px" }}>
      <ResponsiveContainer width="100%" height={176}>
        <PieChart>
          <Pie data={data} innerRadius={70} outerRadius={88} dataKey="value">
            <Label value={`${value} % пробурено`} position="center" />
            {data.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartWithoutHeader
