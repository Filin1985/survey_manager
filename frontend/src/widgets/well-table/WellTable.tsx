import React from "react"
import styles from "./well-table.module.scss"
import { useTable } from "react-table"

export const WellTable = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 2100,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2150,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2200,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2250,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2300,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2350,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2400,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2450,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2500,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2600,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2650,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2700,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2800,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2900,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 2950,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 3000,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
      {
        col1: 3100,
        col2: 0.0042954,
        col3: 2100,
        col4: 0.0042954,
        col5: 2100,
        col6: 0.0042954,
        col7: 2100,
        col8: 0.0042954,
        col9: 2100,
        col10: 0.0042954,
        col11: 2100,
        col12: 0.0042954,
      },
    ],
    []
  )

  const columns: any = React.useMemo(
    () => [
      {
        Header: "MD",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Gy",
        accessor: "col2",
      },
      {
        Header: "Gx",
        accessor: "col3",
      },
      {
        Header: "Gz",
        accessor: "col4",
      },
      {
        Header: "Bx",
        accessor: "col5",
      },
      {
        Header: "By",
        accessor: "col6",
      },
      {
        Header: "Bz",
        accessor: "col7",
      },
      {
        Header: "Gtotal",
        accessor: "col8",
      },
      {
        Header: "Gtotal",
        accessor: "col9",
      },
      {
        Header: "Btotal_raw",
        accessor: "col10",
      },
      {
        Header: "Зенитный угол",
        accessor: "col11",
      },
      {
        Header: "Азимут",
        accessor: "col12",
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <div className={styles.table}>
      <table {...getTableProps()} className={styles.table__container}>
        <thead className={styles.table__header}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className={styles.table__head}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className={styles.table__row}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className={styles.table__item}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
