import { RolesAuthModule } from "./modules/roles-auth";
import { RootActions } from "./root/RootActions";

export interface Actions {
    root: RootActions;
    auth: RolesAuthModule.PublicActions;
}

export namespace Actions {
    export type Type = RootActions.Type | RolesAuthModule.PublicActionType;
}
