import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useArgs } from "storybook/preview-api"
import { fn } from "storybook/test"

import { robotoRegular } from "../../../fonts"

import UiInput from "./UiInput"

const meta: Meta<typeof UiInput> = {
  title: "Form/UiInput",
  component: UiInput,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: { type: "boolean" } },
    multiline: { control: { type: "boolean" } },
    isClearButton: { control: { type: "boolean" } },
    fullWidth: { control: { type: "boolean" } },
    styleGrow: { control: { type: "boolean" } },
  },
  args: {
    label: "Insert your link here",
    value: "",
    disabled: false,
    multiline: false,
    isClearButton: true,
    fullWidth: false,
    setValue: fn(),
  },
  // Поле управляемое: ввод и очистка обновляют аргумент value истории
  render: function Render(args) {
    const [, updateArgs] = useArgs()

    const setValue = (value: string) => {
      args.setValue(value)
      updateArgs({ value })
    }

    return <UiInput {...args} setValue={setValue} />
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
} satisfies Meta<typeof UiInput>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const WithTitle: Story = {
  args: {
    title: "Link",
    value: "https://example.com",
  },
}

export const Disabled: Story = {
  args: {
    value: "https://example.com",
    disabled: true,
  },
}

export const Multiline: Story = {
  args: {
    label: "Insert your text here",
    multiline: true,
  },
}
