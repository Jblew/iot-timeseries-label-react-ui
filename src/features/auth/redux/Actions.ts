import { RolesAuthModule } from "firestore-roles-redux-module";

export interface Actions {
    rolesAuth: RolesAuthModule.PublicActions;
}

export type ActionsType = RolesAuthModule.PublicActionType;
