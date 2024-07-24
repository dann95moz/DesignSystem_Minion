import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../lib/Themes/dark";
import { lightTheme } from "../lib/Themes/light";
import { Link } from "../lib/components/Link";
import { commonArgTypes, iconsControl } from "./utils/commonControls";

// Definimos un tipo para nuestros iconos

const meta = {
  title: "Example/Link",
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

const LinkWithTheme: React.FC<any> = ({ isDarkTheme, ...props }) => {
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ padding: "20px", width: "100%", backgroundColor: theme.white }}
      >
        <Link {...props} />
      </div>
    </ThemeProvider>
  );
};
export const Small: Story = {
  args: {
    size: "small",
    onClick: action("clicked"),
    icon: "none",
    label: "Link Text",
  },
  render: (args) => <LinkWithTheme {...args} />,
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
