import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import ButtonControl from "@/controls/Button/Button"
import type { ButtonPropsType } from "@/controls/Button/Button.types"

/** Replace control component when is wrapped in forwardRef to reflect this in autodocs */
function Button(args: ButtonPropsType) {
  return <ButtonControl {...args} />
}

const meta = {
  component: Button,
  args: {
    disabled: false,
    color: "primary",
    // children: "Default button",
    variant: "filled",
    children: "Default button"
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined"],
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

} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Button {...args} />,
  args: {
    children: "Button"
  }
}
