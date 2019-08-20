import { RouterState } from "connected-react-router";
import { State as AuthFeatureState } from "features/auth/redux/State";

export type State = {
    router: RouterState;
} & AuthFeatureState;
