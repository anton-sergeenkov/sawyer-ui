import { useState } from "react"
import cn from "classnames"
import { Alert } from "@mui/material"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
// import { AlertProps } from "@/ui-kit/constants"

import { checkWidth } from "./utils"

import styles from "./styles.module.css"

export interface IUiTableData {
  headers: string[]
  fields: Object[]
}

interface IProps {
  fullWidth?: boolean
  data: IUiTableData
}

const UiTable: React.FC<IProps> = (props) => {
  const { data, fullWidth = false } = props
  const { headers, fields } = data

  const [hideInfoAlert, setHideInfoAlert] = useState<boolean>(false)

  const rows = fields.map((element) => {
    return Object.values(element).flatMap((value) => value)
  })

  if (!fields.length && !hideInfoAlert) {
    return (
      <Alert
        severity="info"
        onClose={() => setHideInfoAlert(true)}
        // {...AlertProps}
      >
        No results
      </Alert>
    )
  }

  if (!fields.length && hideInfoAlert) {
    return null
  }

  return (
    <TableContainer
      sx={checkWidth(fullWidth)}
      component={Paper}
      className={styles.wrapper}
    >
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            {headers.map((element, index) => (
              <TableCell
                className={cn(styles.cellHeader, styles.cellAlignCenter)}
                key={index}
              >
                {element}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((elementData, indexData) => (
            <TableRow key={indexData}>
              {elementData.map((elementItem, indexItem) => (
                <TableCell
                  key={indexItem}
                  className={cn(styles.cell, styles.cellAlignCenter)}
                >
                  {elementItem}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UiTable

// const Usage = () => {
//   const users = [
//     { name: "Tony", age: "23" },
//     { name: "Jack", age: "27" },
//   ]
//   const headers = ["Name", "Age"]
//   return <UiTable headers={headers} data={users} />
// }

// <UiTable
//   data={{
//     headers: ["Header"],
//     fields: prepareTableData(storeParsingMultipleLinks.taskIds),
//   }}
// />
