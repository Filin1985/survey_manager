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
import { IWellChart } from "../../services/slices/wellsSlice"

type TChart = {
  data: IWellChart[]
}

const PieChartComponent: React.FC<TChart> = ({ data }) => {
  return (
    <section className={cn(styles.chart, styles.chart__height_fix)}>
      <h2 className={styles.chart__title}>Скважин в бурении</h2>
      <ul className={styles.chart__list}>
        {data.map((item: any) => (
          <li key={item.color} className={styles.chart__item}>
            <div
              className={styles.chart__color}
              style={{ backgroundColor: item.color, borderRadius: "50%" }}
            ></div>
            <p className={styles.chart__name}>{item.name}</p>
            <p className={styles.chart__value}>{item.value}</p>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "25px" }}>
        <ResponsiveContainer width="100%" height={176}>
          <PieChart>
            <Pie data={data} innerRadius={70} outerRadius={88} dataKey="value">
              <Label
                value={`${data.reduce(
                  (prev: any, curr: any) => prev + curr.value,
                  0
                )} всего`}
                position="center"
              />
              {data.map((entry: any, index: any) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default PieChartComponent
