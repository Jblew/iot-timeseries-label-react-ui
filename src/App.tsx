import React from "react";

import DrawerLayour from "./components/layout/DrawerLayout";
import Menu from "./components/Menu";

function App() {
    return (
        <DrawerLayour menu={<Menu />}>
            <p>Some content</p>
        </DrawerLayour>
    );
}

export default App;
