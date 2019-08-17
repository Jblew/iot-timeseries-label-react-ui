import * as firebase from "firebase/app";
import { RolesConfig } from "iot-timeseries-label-core";

import { RolesAuthModule } from "../../../../../firestore-roles-redux-module/src/index";
export { RolesAuthModule } from "../../../../../firestore-roles-redux-module/src/index";

export function configureRolesAuthModule() {
    return RolesAuthModule.getModule(
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
