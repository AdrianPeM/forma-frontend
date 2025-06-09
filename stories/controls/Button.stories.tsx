"use client"

import { useRef } from "react"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@controls"

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
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const $button = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
      console.log($button.current)
    }
    return <Button {...args} onClick={handleClick} ref={$button} />
  },
  args: {
    children: "Button"
  }
}
