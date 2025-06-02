import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { TextField } from "@/controls"

const meta = {
  component: TextField,
  args: {
    disabled: false,
    color: "primary",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    status: {
      control: "select",
      options: [undefined, "info", "success", "warning", "error"],
    },
  },
  tags: ["autodocs", "!dev"],
  parameters: {
    layout: "centered",
  },

} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <TextField {...args} />
}
