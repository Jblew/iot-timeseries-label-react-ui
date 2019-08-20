import { Actions as AuthFeatureActions } from "features/auth/redux/Actions";
import { Actions as AuthFeatureActionsType } from "features/auth/redux/Actions";
import { RootActions } from "store/root/RootActions";

export type Actions = {
    root: RootActions;
} & AuthFeatureActions;

export type ActionsType = AuthFeatureActionsType;
