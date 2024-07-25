import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../lib/main";

import { commonArgTypes, iconsControl } from "./utils/commonControls";

// Definimos un tipo para nuestros iconos

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes,
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    icon: iconsControl,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button Text",
    onClick: action("clicked"),
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
