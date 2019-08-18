import * as firebase from "firebase/app";
import { RolesAuthModule } from "firestore-roles-redux-module";
import { RolesConfig } from "iot-timeseries-label-core";

import { State } from "../../State";

export function configureRolesAuthModule() {
    return RolesAuthModule.getModule<State>(
        {
            roles: RolesConfig,
            callbacks: {
                onAuthenticated: account => {
                    /* */
                },
                onNotAuthenticated: () => {
                    /* */
                },
                onError: error => {
                    /* */
                },
            },
        },
        firebase.auth(),
        firebase.firestore(),
    );
}
