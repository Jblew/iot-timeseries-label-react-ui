import { Dispatch } from "redux";

import { RolesAuthModule } from "../modules/roles-auth";
import { State } from "../State";

import { RootActions } from "./RootActions";

export class RootActionsImpl implements RootActions {
    private authActions: RolesAuthModule.PublicActions;

    public constructor(authActions: RolesAuthModule.PublicActions) {
        this.authActions = authActions;
    }

    public initialize() {
        return (dispatch: Dispatch, getState: () => State) => {
            dispatch(this.authActions.initialize());
        };
    }
}
