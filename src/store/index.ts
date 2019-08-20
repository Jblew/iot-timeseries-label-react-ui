import { connectRouter, routerMiddleware as createRouterMiddleware } from "connected-react-router";
import { configureFeatureStore as AuthFeature_configureFeatureStore } from "features/auth/redux/configureFeatureStore";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunk from "redux-thunk";
import { Action } from "typesafe-actions";

import { Actions } from "./Actions";
import { RootActionsImpl } from "./root/RootActionsImpl";
import { State } from "./State";
import { Store } from "./Store";
import { composeEnhancers } from "./utils";

export const history = createBrowserHistory();

export function configureStore(): Store {
    const routerMiddleware = createRouterMiddleware(history);

    // configure middlewares
    const middlewares = [routerMiddleware, thunk];
    // compose enhancers
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    // rehydrate state on app start
    const initialState = {};

    const authFeature = AuthFeature_configureFeatureStore();

    const rootReducer: Reducer<State, Action<any>> = combineReducers({
        router: connectRouter(history),
        rolesAuth: authFeature.reducer,
    });

    const actions: Actions = {
        root: new RootActionsImpl(authFeature.actions),
        rolesAuth: authFeature.actions,
    };

    const store = createStore(rootReducer, initialState, enhancer);
    store.dispatch<any>(actions.root.initialize());
    return {
        ...store,
        actions,
    };
}
