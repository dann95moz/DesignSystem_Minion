import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Link } from "../lib/components/Link";
import { commonArgTypes, iconsControl } from "./utils/commonControls";

// Definimos un tipo para nuestros iconos

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes,
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    icon: iconsControl,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    onClick: action("clicked"),
    icon: "none",
    label: "Link Text",
  },
};

export const Medium: Story = {
  args: {
    ...Small.args,
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    ...Small.args,
    size: "large",
  },
};
