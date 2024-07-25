import type { StoryObj } from "@storybook/react";

import { Banner } from "../lib/components/Banner";
import Success from "../lib/components/icons/Success";
import Warning from "../lib/components/icons/Warning";
import Error from "../lib/components/icons/Error";
import Info from "../lib/components/icons/Info";
import { LinksControl } from "./utils/commonControls";

// Definimos un tipo para nuestros iconos

const meta = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: "title",
    iconStatus: {
      control: "select",
      options: ["Success", "Warning", "Error", "Info"],
      mapping: {
        Info: <Info />,
        Success: <Success />,
        Warning: <Warning />,
        Error: <Error />,
      },
    },
    primaryLink: LinksControl,
    secondaryLink: LinksControl,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    children: "text",
    iconStatus: <Success />,
  },
};
