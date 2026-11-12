import { useState } from "react"
import { Alert, Table } from "@mantine/core"

// https://mantine.dev/core/table/

export interface IUiTableData {
  // Заголовки колонок
  headers: string[]
  // Строки: значения объекта выводятся по порядку, по одному в колонку
  fields: Record<string, React.ReactNode>[]
}

interface IProps {
  // Таблица на всю ширину контейнера, иначе — по содержимому
  fullWidth?: boolean
  data: IUiTableData
}

const UiTable: React.FC<IProps> = (props) => {
  const { data, fullWidth = false } = props
  const { headers, fields } = data

  const [isShowInfoAlert, setIsShowInfoAlert] = useState<boolean>(true)

  const rows = fields.map((element) => Object.values(element))

  // Нет строк — вместо таблицы уведомление, которое можно закрыть
  if (!fields.length) {
    if (!isShowInfoAlert) {
      return null
    }

    return (
      <Alert
        withCloseButton
        closeButtonLabel="Close"
        onClose={() => setIsShowInfoAlert(false)}
      >
        No results
      </Alert>
    )
  }

  return (
    // Таблица в стандартном виде Mantine, с рамкой
    <Table withTableBorder w={fullWidth ? "100%" : "auto"}>
      <Table.Thead>
        <Table.Tr>
          {headers.map((element, index) => (
            <Table.Th key={index}>{element}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((elementData, indexData) => (
          <Table.Tr key={indexData}>
            {elementData.map((elementItem, indexItem) => (
              <Table.Td key={indexItem}>{elementItem}</Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}

export default UiTable
