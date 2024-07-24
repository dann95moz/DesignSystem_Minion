import { ThemeProvider } from "styled-components";
import { Button } from "./lib/main";
import { useState } from "react";
import { lightTheme } from "./lib/Themes/light";
import { darkTheme } from "./lib/Themes/dark";
import "./lib/styles/global.css";
import { Background } from "./lib/components/Background";
import { Banner } from "./lib/components/Banner";
function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [variant, setVariant] = useState<"primary" | "secondary">("primary");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };
  const variantToggle = () => {
    setVariant((prev) => (prev === "primary" ? "secondary" : "primary"));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Background>
        <Button variant={variant}> texto </Button>
        <Banner title="title example" dismissable>
          texto <b>negrita</b> <i>cursiva</i>
          <i>
            <b>combinado</b>
          </i>
        </Banner>
      </Background>
      <button onClick={toggleTheme}>toggler</button>
      <button onClick={variantToggle}>variant toggle</button>
    </ThemeProvider>
  );
}

export default App;
