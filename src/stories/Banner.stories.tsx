import type { StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../lib/Themes/dark";
import { lightTheme } from "../lib/Themes/light";
import { Banner } from "../lib/components/Banner";
import Success from "../lib/components/icons/Success";
import Warning from "../lib/components/icons/Warning";
import Error from "../lib/components/icons/Error";
import Info from "../lib/components/icons/Info";
import { LinksControl, themeControl } from "./utils/commonControls";

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
    isDarkTheme: themeControl,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BannerWithTheme: React.FC<any> = ({ isDarkTheme, ...props }) => {
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "20px", backgroundColor: theme.white }}>
        <Banner {...props} />
      </div>
    </ThemeProvider>
  );
};
export const Default: Story = {
  args: {
    title: "title",
    children: "text",
  },
  render: (args) => <BannerWithTheme {...args} />,
};
