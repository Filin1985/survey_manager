import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
} from 'recharts'
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

type TDataChart = {
  color: string
  name: string
  value: number
}

type TChart = {
  data: TDataChart[]
}

const PieChartComponent = () => {
  return (
    <section className={styles.chart}>
      <h2 className={styles.chart__title}>Скважин в бурении</h2>
      <ul className={styles.chart__list}>
        {data.map((item) => (
          <li key={item.color} className={styles.chart__item}>
            <div
              className={styles.chart__color}
              style={{ backgroundColor: item.color, borderRadius: '50%' }}
            ></div>
            <p className={styles.chart__name}>{item.name}</p>
            <p className={styles.chart__value}>{item.value}</p>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '25px' }}>
        <ResponsiveContainer width='100%' height={176}>
          <PieChart>
            <Pie data={data} innerRadius={70} outerRadius={88} dataKey='value'>
              <Label
                value={`${data.reduce(
                  (prev, curr) => prev + curr.value,
                  0
                )} всего`}
                position='center'
              />
              {data.map((entry, index) => (
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
