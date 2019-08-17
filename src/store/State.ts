import { RouterState } from "connected-react-router";

import { RolesAuthModule } from "./modules/roles-auth";

export interface State {
    router: RouterState;
    auth: RolesAuthModule.State;
}
