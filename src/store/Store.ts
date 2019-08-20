import { AnyAction, Store as ReduxStore } from "redux";

import { Actions } from "./Actions";
import { State } from "./State";

export interface Store extends ReduxStore<State, AnyAction> {
    actions: Actions;
}
