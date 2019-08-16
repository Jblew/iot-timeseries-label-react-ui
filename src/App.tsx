import { ThemeProvider } from "@material-ui/styles";
import React from "react";

import DrawerLayour from "./components/layout/DrawerLayout";
import Menu from "./components/Menu";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <DrawerLayour menu={<Menu />}>
                <p>Some content</p>
            </DrawerLayour>
        </ThemeProvider>
    );
}

export default App;
