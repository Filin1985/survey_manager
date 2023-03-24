import React from "react"
import cn from "classnames"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { ArrowLeftIcon, ArrowRightIcon } from "../../ui-kit/svg/icons"
import styles from "./charts.module.scss"

const data: TDataChart[] = [
  {
    color: "#FED602",
    name: "Baker Hughes",
    value: 10,
  },
  {
    color: "#FF8863",
    name: "ССК",
    value: 4,
  },
  {
    color: "#4DC3F7",
    name: "Schlumberger",
    value: 11,
  },
  {
    color: "#8DDA71",
    name: "Интеллектуальные системы",
    value: 12,
  },
  {
    color: "#BD65A4",
    name: "Weatherford",
    value: 7,
  },
  {
    color: "#3682DB",
    name: "ПНМР",
    value: 4,
  },
]

const months: TMonths[] = [
  {
    name: "1",
    value: 20,
  },
  {
    name: "2",
    value: 25,
  },
  {
    name: "3",
    value: 20,
  },
  {
    name: "4",
    value: 25,
  },
  {
    name: "5",
    value: 20,
  },
  {
    name: "6",
    value: 25,
  },
  {
    name: "7",
    value: 25,
  },
  {
    name: "8",
    value: 20,
  },
  {
    name: "9",
    value: 25,
  },
  {
    name: "10",
    value: 25,
  },
  {
    name: "11",
    value: 20,
  },
  {
    name: "12",
    value: 25,
  },
]

type TDataChart = {
  color: string
  name: string
  value: number
}

type TMonths = {
  name: string
  value: number
}

const BarChartComponent = () => {
  return (
    <section className={cn(styles.chart, styles.chart__padding_less)}>
      {/* <div className={styles.chart__arrows}>
        <div className={styles.chart__icon}>
          <ArrowLeftIcon />
        </div>
        {data[0].name}
        <div className={styles.chart__icon}>
          <ArrowRightIcon />
        </div>
      </div> */}
      <h3 className={styles.chart__header}>Сопровождение по месяцам</h3>
      <div style={{ marginTop: "0px" }}>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={months} barSize={20}>
            <XAxis
              style={{ fontSize: "12px" }}
              dataKey="name"
              axisLine={false}
              interval={0}
              tickLine={false}
            />
            <YAxis hide={true} domain={[0, 30]} />
            <Tooltip labelStyle={{ fontSize: "12px" }} />
            <Bar
              style={{ borderRadius: "5px" }}
              dataKey="value"
              fill="#1d6fa3"
              background={{ fill: "#F6F7F9" }}
              radius={5}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default BarChartComponent
