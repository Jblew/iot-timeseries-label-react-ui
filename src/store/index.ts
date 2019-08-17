import { connectRouter, routerMiddleware as createRouterMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunk from "redux-thunk";

import { Actions } from "./Actions";
import { configureRolesAuthModule } from "./modules/roles-auth";
import { RootActionsImpl } from "./root/RootActionsImpl";
import { State } from "./State";
import { Store } from "./Store";
import { composeEnhancers } from "./utils";

export default function configureStore(): Store {
    const history = createBrowserHistory();

    const routerMiddleware = createRouterMiddleware(history);

    // configure middlewares
    const middlewares = [routerMiddleware, thunk];
    // compose enhancers
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    // rehydrate state on app start
    const initialState = {};

    const rolesAuthModule = configureRolesAuthModule();

    const rootReducer: Reducer<State, Actions.Type> = combineReducers({
        router: connectRouter(history),
        auth: rolesAuthModule.reducer,
    });

    const actions: Actions = {
        root: new RootActionsImpl(rolesAuthModule.actions),
        auth: rolesAuthModule.actions,
    };

    const store = createStore(rootReducer, initialState, enhancer);
    store.dispatch<any>(actions.auth.initialize());
    return {
        ...store,
        actions,
    };
}
