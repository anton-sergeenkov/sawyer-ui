import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useArgs } from "storybook/preview-api"
import { fn } from "storybook/test"

import { robotoRegular } from "../../../fonts"

import UiSelect from "./UiSelect"

const items = [
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
]

const meta: Meta<typeof UiSelect> = {
  title: "Form/UiSelect",
  component: UiSelect,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: { type: "boolean" } },
    styleGrow: { control: { type: "boolean" } },
  },
  args: {
    items,
    value: "",
    label: "Select platform",
    disabled: false,
    setValue: fn(),
  },
  // Поле управляемое: выбор пункта обновляет аргумент value истории
  render: function Render(args) {
    const [, updateArgs] = useArgs()

    const setValue = (value: string) => {
      args.setValue(value)
      updateArgs({ value })
    }

    return <UiSelect {...args} setValue={setValue} />
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px", height: "220px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const WithTitle: Story = {
  args: {
    title: "Platform",
    value: "youtube",
  },
}

export const Disabled: Story = {
  args: {
    value: "youtube",
    disabled: true,
  },
}
