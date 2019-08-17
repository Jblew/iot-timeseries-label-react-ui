import { ThemeProvider } from "@material-ui/styles";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";

import Dashboard from "./components/Dashboard";
import DrawerLayout from "./components/layout/DrawerLayout";
import Menu from "./components/Menu";
import { configureStore, history } from "./store";
import theme from "./theme";

function App() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={theme}>
                    <DrawerLayout menu={<Menu />}>
                        <Dashboard />
                    </DrawerLayout>
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
