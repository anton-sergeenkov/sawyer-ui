import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { robotoRegular } from "../../../fonts"

import UiTabs from "./UiTabs"

const TabProfile: React.FC = () => <div>Content of the first tab</div>
const TabProjects: React.FC = () => <div>Content of the second tab</div>
const TabContacts: React.FC = () => <div>Content of the third tab</div>

const meta: Meta<typeof UiTabs> = {
  title: "Basic/UiTabs",
  component: UiTabs,
  tags: ["autodocs"],
  args: {
    data: [
      { tab: "Profile", content: TabProfile },
      { tab: "Projects", content: TabProjects },
      { tab: "Contacts", content: TabContacts },
    ],
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
} satisfies Meta<typeof UiTabs>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
