import { useState } from "react"
import { Tabs } from "@mantine/core"

// https://mantine.dev/core/tabs/

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

  const [value, setValue] = useState<string | null>("0")

  return (
    // Вкладки в стандартном виде Mantine
    <Tabs value={value} onChange={setValue} keepMounted={false}>
      <Tabs.List>
        {data.map((element, index) => (
          <Tabs.Tab key={index} value={String(index)}>
            {element.tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {data.map((element, index) => (
        <Tabs.Panel
          key={index}
          value={String(index)}
          pt="xs"
          className={classNamePanel}
        >
          <element.content />
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}

export default UiTabs
