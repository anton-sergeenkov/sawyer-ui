import { useState } from "react"
import cn from "classnames"

import { Tabs, Tab } from "@mui/material"

import styles from "./styles.module.css"

interface IProps {
  children?: React.ReactNode
  index: number
  value: number
  classNamePanel?: string
}

const CustomTabPanel: React.FC<IProps> = (props) => {
  const { children, value, index, classNamePanel, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <div className={cn(styles.panel, classNamePanel)}>{children}</div>
      )}
    </div>
  )
}

interface IUiTabsData {
  tab: string
  content: React.FC
}

interface IUiTabs {
  data: IUiTabsData[]
  classNamePanel?: string
}

const UiTabs: React.FC<IUiTabs> = (props) => {
  const { data, classNamePanel } = props

  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={styles.wrapper}>
      <Tabs className={styles.tabs} value={value} onChange={handleChange}>
        {data.map((element, index) => (
          <Tab className={styles.tab} key={index} label={element.tab} />
        ))}
      </Tabs>

      {data.map((element, index) => (
        <CustomTabPanel
          key={index}
          value={value}
          index={index}
          classNamePanel={classNamePanel}
        >
          <element.content />
        </CustomTabPanel>
      ))}
    </div>
  )
}

export default UiTabs

// <UiTabs
//   classNamePanel={styles.panel}
//   data={[
//     {
//       tab: "Tab1",
//       content: Component1,
//     },
//     {
//       tab: "Tab2",
//       content: Component2,
//     },
//   ]}
// />
