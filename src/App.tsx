import { ThemeProvider } from "@material-ui/styles";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";

import ViewRouter from "./components/views/ViewRouter";
import { configureStore, history } from "./store";
import theme from "./theme";

function App() {
    const store = configureStore();
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={theme}>
                    <ViewRouter />
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
