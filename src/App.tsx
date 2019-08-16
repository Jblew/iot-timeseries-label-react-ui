import { ThemeProvider } from "@material-ui/styles";
import React from "react";

import Dashboard from "./components/Dashboard";
import DrawerLayour from "./components/layout/DrawerLayout";
import Menu from "./components/Menu";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <DrawerLayour menu={<Menu />}>
                <Dashboard />
            </DrawerLayour>
        </ThemeProvider>
    );
}

export default App;
