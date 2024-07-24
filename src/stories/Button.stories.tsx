import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../lib/main";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../lib/Themes/dark";
import { lightTheme } from "../lib/Themes/light";
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

const ButtonWithTheme: React.FC<any> = ({ isDarkTheme, ...props }) => {
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "20px", backgroundColor: theme.white }}>
        <Button {...props} />
      </div>
    </ThemeProvider>
  );
};
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button Text",
    onClick: action("clicked"),
  },
  render: (args) => <ButtonWithTheme {...args} />,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
