import React from "react"
import cn from "classnames"
import { Paper, Table } from "@mantine/core"

import styles from "./styles.module.css"

// https://mantine.dev/core/table/

// Строка таблицы-записи: название поля и значение
export interface IUiTableRecordRow {
  title: string
  data: React.ReactNode
}

interface IProps {
  rows: IUiTableRecordRow[]
  fullWidth?: boolean
}

const UiTableRecord: React.FC<IProps> = (props) => {
  const { rows, fullWidth = false } = props

  return (
    <Paper
      className={cn(
        styles.wrapper,
        fullWidth ? styles.fullWidth : styles.autoWidth,
      )}
    >
      <Table className={styles.table} withRowBorders={false}>
        <Table.Tbody>
          {rows.map((element, index) => (
            <Table.Tr key={index}>
              <Table.Td className={styles.cellHeader}>{element.title}</Table.Td>
              <Table.Td className={styles.cell}>{element.data}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  )
}

export default UiTableRecord
