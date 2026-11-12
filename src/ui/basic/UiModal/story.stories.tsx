import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useArgs } from "storybook/preview-api"
import { fn } from "storybook/test"

import { robotoRegular } from "../../../fonts"
import UiButton from "../../form/UiButton"
import UiTypography from "../UiTypography"

import UiModal from "./UiModal"

const meta: Meta<typeof UiModal> = {
  title: "Basic/UiModal",
  component: UiModal,
  tags: ["autodocs"],
  // Без отступов у body, как в приложении: контейнер окна Mantine (position: fixed
  // без left) иначе сдвигается на padding, который Storybook задаёт body
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    disableAutoFocus: {
      control: { type: "boolean" },
    },
    isContentClickClose: {
      control: { type: "boolean" },
    },
    children: {
      control: false,
    },
  },
  args: {
    open: false,
    disableAutoFocus: true,
    isContentClickClose: false,
    onClose: fn(),
  },
  // Окно открывается по кнопке: open хранится в аргументах истории
  render: function Render(args) {
    const [, updateArgs] = useArgs()

    const onOpen = () => {
      updateArgs({ open: true })
    }

    const onClose = () => {
      args.onClose()
      updateArgs({ open: false })
    }

    return (
      <>
        <UiButton onClick={onOpen}>Open modal</UiButton>

        <UiModal {...args} onClose={onClose}>
          <div style={{ maxWidth: "420px" }}>
            <UiTypography tag="h3">Modal window</UiTypography>
            <UiTypography tag="p">
              The window opens by clicking the button and closes by clicking
              outside it, pressing Esc or the Close button.
            </UiTypography>
            <UiTypography tag="p">
              Any content can be placed inside: text, images, forms or other
              ui-kit components.
            </UiTypography>
            <div style={{ marginTop: "15px", textAlign: "right" }}>
              <UiButton onClick={onClose}>Close</UiButton>
            </div>
          </div>
        </UiModal>
      </>
    )
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
} satisfies Meta<typeof UiModal>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
