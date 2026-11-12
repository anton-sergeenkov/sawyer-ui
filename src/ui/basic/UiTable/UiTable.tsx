import { useState } from "react"
import cn from "classnames"
import { Paper, Table } from "@mantine/core"
import UiAlert from "../UiAlert"

import styles from "./styles.module.css"

// https://mantine.dev/core/table/

export interface IUiTableData {
  // Заголовки колонок
  headers: string[]
  // Строки: значения объекта выводятся по порядку, по одному в колонку
  fields: Record<string, React.ReactNode>[]
}

interface IProps {
  fullWidth?: boolean
  data: IUiTableData
}

const UiTable: React.FC<IProps> = (props) => {
  const { data, fullWidth = false } = props
  const { headers, fields } = data

  const [isShowInfoAlert, setIsShowInfoAlert] = useState<boolean>(true)

  const rows = fields.map((element) => Object.values(element))

  if (!fields.length) {
    return (
      <UiAlert
        type="info"
        variant="standard"
        noSpacing
        isShow={isShowInfoAlert}
        setIsShow={setIsShowInfoAlert}
      >
        No results
      </UiAlert>
    )
  }

  return (
    <Paper
      className={cn(
        styles.wrapper,
        fullWidth ? styles.fullWidth : styles.autoWidth,
      )}
    >
      <Table className={styles.table} withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            {headers.map((element, index) => (
              <Table.Th
                className={cn(styles.cellHeader, styles.cellAlignCenter)}
                key={index}
              >
                {element}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((elementData, indexData) => (
            <Table.Tr key={indexData}>
              {elementData.map((elementItem, indexItem) => (
                <Table.Td
                  key={indexItem}
                  className={cn(styles.cell, styles.cellAlignCenter)}
                >
                  {elementItem}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  )
}

export default UiTable
