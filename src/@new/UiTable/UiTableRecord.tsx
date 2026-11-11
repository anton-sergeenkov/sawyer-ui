import React from "react"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"

import { checkWidth } from "./utils"

import styles from "./styles.module.css"

export interface IUiTableRecordRow {
  title: string
  data: string | number | React.ReactNode
}

interface IProps {
  rows: IUiTableRecordRow[]
  fullWidth?: boolean
}

const UiTableRecord: React.FC<IProps> = (props) => {
  const { rows, fullWidth = false } = props

  return (
    <TableContainer
      sx={checkWidth(fullWidth)}
      component={Paper}
      className={styles.wrapper}
    >
      <Table className={styles.table}>
        <TableBody>
          {rows.map((element, index) => (
            <TableRow key={index}>
              <TableCell className={styles.cellHeader}>
                {element.title}
              </TableCell>
              <TableCell className={styles.cell}>{element.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UiTableRecord
