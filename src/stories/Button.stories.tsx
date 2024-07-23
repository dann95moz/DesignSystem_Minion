import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../lib/main";
import { AccessAlarms, AddShoppingCart, Home } from "@mui/icons-material";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../lib/Themes/dark";
import { lightTheme } from "../lib/Themes/light";

// Definimos un tipo para nuestros iconos

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    startIcon: {
      control: "select",
      options: ["none", "Home", "AccessAlarms", "AddShoppingCart"],
      mapping: {
        none: null,
        Home: <Home />,
        AccessAlarms: <AccessAlarms />,
        AddShoppingCart: <AddShoppingCart />,
      },
    },
    endIcon: {
      control: "select",
      options: ["none", "Home", "AccessAlarms", "AddShoppingCart"],
      mapping: {
        none: null,
        Home: <Home />,
        AccessAlarms: <AccessAlarms />,
        AddShoppingCart: <AddShoppingCart />,
      },
    },
    disabled: {
      control: "boolean",
      description: "Toggle between enable and disable",
    },
    isDarkTheme: {
      control: "boolean",
      description: "Toggle between light and dark theme",
    },
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
    startIcon: "none",
    endIcon: "none",
  },
  render: (args) => <ButtonWithTheme {...args} />,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
