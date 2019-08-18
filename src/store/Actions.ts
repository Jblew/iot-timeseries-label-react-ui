import { RolesAuthModule } from "firestore-roles-redux-module";

import { RootActions } from "./root/RootActions";

export interface Actions {
    root: RootActions;
    rolesAuth: RolesAuthModule.PublicActions;
}

export namespace Actions {
    export type Type = RootActions.Type | RolesAuthModule.PublicActionType;
}
