import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { FIREBASE_CONFIG } from "iot-timeseries-label-core";

firebase.initializeApp(FIREBASE_CONFIG);
