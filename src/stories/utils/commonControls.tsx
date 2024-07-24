import { AccessAlarms, AddShoppingCart, Home } from "@mui/icons-material";
import { Link } from "../../lib/components/Link";

export const disabledControl = {
  control: "boolean",
  description: "Toggle between enable and disable",
};

export const themeControl = {
  control: "boolean",
  description: "Toggle between light and dark theme",
};
export const iconsControl = {
  control: "select",
  options: ["none", "Home", "AccessAlarms", "AddShoppingCart"],
  mapping: {
    none: null,
    Home: <Home />,
    AccessAlarms: <AccessAlarms />,
    AddShoppingCart: <AddShoppingCart />,
  },
};
export const LinksControl = {
  control: "select",
  options: ["Example1", "Example2", "Example3", "Example4"],
  mapping: {
    Example1: <Link size="medium" label="Example1" href="#" />,
    Example2: <Link size="medium" label="Example2" href="#" />,
    Example3: <Link size="medium" label="Example3" href="#" />,
    Example4: <Link size="medium" label="Example4" href="#" />,
  },
};
export const commonArgTypes = {
  disabled: disabledControl,
  isDarkTheme: themeControl,
  // ... add other common controls
};
