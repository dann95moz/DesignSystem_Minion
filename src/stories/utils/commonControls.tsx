import { AccessAlarms, AddShoppingCart, Home } from "@mui/icons-material";

export const disabledControl = {
  control: "boolean",
  description: "Toggle between enable and disable",
};

export const positionControl = {
  control: "select",
  options: ["start", "end"],
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
export const commonArgTypes = {
  disabled: disabledControl,
  position: positionControl,
  isDarkTheme: themeControl,
  // ... add other common controls
};
