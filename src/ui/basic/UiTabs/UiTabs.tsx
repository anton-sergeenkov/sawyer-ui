import { useState } from "react"
import cn from "classnames"
import { FloatingIndicator, Tabs } from "@mantine/core"

import styles from "./styles.module.css"

// https://mantine.dev/core/tabs/
// https://mantine.dev/core/floating-indicator/

// Вкладка: название и компонент с её содержимым
export interface IUiTabsData {
  tab: string
  content: React.FC
}

interface IUiTabs {
  data: IUiTabsData[]
  classNamePanel?: string
}

const UiTabs: React.FC<IUiTabs> = (props) => {
  const { data, classNamePanel } = props

  const [value, setValue] = useState<string>("0")
  // Список вкладок и активная вкладка — для подчёркивания (FloatingIndicator)
  const [listElement, setListElement] = useState<HTMLDivElement | null>(null)
  const [activeTab, setActiveTab] = useState<HTMLButtonElement | null>(null)

  const handleChange = (newValue: string | null) => {
    if (newValue !== null) {
      setValue(newValue)
    }
  }

  return (
    // variant="none": без оформления вкладок Mantine, вид задаёт styles.module.css
    <Tabs
      className={styles.wrapper}
      classNames={{ tab: styles.tab, tabLabel: styles.tabLabel }}
      variant="none"
      value={value}
      onChange={handleChange}
      keepMounted={false}
    >
      <Tabs.List className={styles.tabs} ref={setListElement}>
        {data.map((element, index) => (
          <Tabs.Tab
            key={index}
            value={String(index)}
            // ref есть только у активной вкладки: под ней подчёркивание
            ref={String(index) === value ? setActiveTab : undefined}
          >
            {element.tab}
          </Tabs.Tab>
        ))}

        <FloatingIndicator
          className={styles.indicator}
          target={activeTab}
          parent={listElement}
          transitionDuration={300}
        />
      </Tabs.List>

      {data.map((element, index) => (
        <Tabs.Panel key={index} value={String(index)}>
          <div className={cn(styles.panel, classNamePanel)}>
            <element.content />
          </div>
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}

export default UiTabs
