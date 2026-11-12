import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../../fonts"

import UiTable from "./UiTable"

const meta: Meta<typeof UiTable> = {
  title: "Basic/UiTable",
  component: UiTable,
  tags: ["autodocs"],
  argTypes: {
    fullWidth: { control: { type: "boolean" } },
  },
  args: {
    fullWidth: false,
    data: {
      headers: ["Name", "Age", "City"],
      fields: [
        { name: "Tony", age: 23, city: "Moscow" },
        { name: "Jack", age: 27, city: "London" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiTable>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

// Нет строк: вместо таблицы — уведомление, которое можно закрыть
export const Empty: Story = {
  args: {
    data: {
      headers: ["Name"],
      fields: [],
    },
  },
}
