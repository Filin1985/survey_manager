import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { ArrowLeftIcon, ArrowRightIcon } from '../../svg/icons'
import styles from './charts.module.scss'

const data: TDataChart[] = [
  {
    color: '#FED602',
    name: 'Baker Hughes',
    value: 10,
  },
  {
    color: '#FF8863',
    name: 'ССК',
    value: 4,
  },
  {
    color: '#4DC3F7',
    name: 'Schlumberger',
    value: 11,
  },
  {
    color: '#8DDA71',
    name: 'Интеллектуальные системы',
    value: 12,
  },
  {
    color: '#BD65A4',
    name: 'Weatherford',
    value: 7,
  },
  {
    color: '#3682DB',
    name: 'ПНМР',
    value: 4,
  },
]

const months: TMonths[] = [
  {
    name: 'Январь',
    value: 20,
  },
  {
    name: 'Февраль',
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
    <section className={styles.chart}>
      <div className={styles.chart__arrows}>
        <div className={styles.chart__icon}>
          <ArrowLeftIcon />
        </div>
        {data[0].name}
        <div className={styles.chart__icon}>
          <ArrowRightIcon />
        </div>
      </div>
      <div style={{ marginTop: '25px' }}>
        <ResponsiveContainer width='100%' height={135}>
          <BarChart data={months} barSize={30}>
            <XAxis
              style={{ fontSize: '12px' }}
              dataKey='name'
              axisLine={false}
              interval={0}
              tickLine={false}
            />
            <YAxis hide={true} domain={[0, 35]} />
            <Bar
              style={{ borderRadius: '5px' }}
              dataKey='value'
              fill='blue'
              background={{ fill: '#F6F7F9' }}
              radius={5}
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default BarChartComponent
