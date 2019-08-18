import { RolesAuthModule } from "firestore-roles-redux-module";
import { Dispatch } from "redux";

import { State } from "../State";

import { RootActions } from "./RootActions";

export class RootActionsImpl implements RootActions {
    private authActions: RolesAuthModule.PublicActions;

    public constructor(authActions: RolesAuthModule.PublicActions) {
        this.authActions = authActions;
    }

    public initialize() {
        return (dispatch: Dispatch, getState: () => State) => {
            dispatch<any>(this.authActions.initialize());
        };
    }
}
