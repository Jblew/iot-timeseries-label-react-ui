import { Store as ReduxStore } from "redux";

import { Actions } from "./Actions";
import { State } from "./State";

export interface Store extends ReduxStore<State, Actions.Type> {
    actions: Actions;
}
