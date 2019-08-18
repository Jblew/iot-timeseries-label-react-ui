import { RouterState } from "connected-react-router";
import { RolesAuthModule } from "firestore-roles-redux-module";

export interface State {
    router: RouterState;
    rolesAuth: RolesAuthModule.State;
}
