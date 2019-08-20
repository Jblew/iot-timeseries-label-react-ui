import { ThunkAction } from "redux-thunk";

export interface RootActions {
    initialize(): ThunkAction<any, any, any, any>;
}
