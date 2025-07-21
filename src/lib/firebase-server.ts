import { initializeApp, FirebaseApp, getApps } from "firebase/app";
import {
  getDataConnect,
  connectDataConnectEmulator,
  DataConnect,
} from "firebase/data-connect";
import { connectorConfig } from "@firebasegen/default-connector";

let serverApp: FirebaseApp | undefined;
let serverDataConnect: DataConnect | undefined;

export function initializeServerFirebase(): void {
  if (!serverApp) {
    const apps = getApps();
    serverApp =
      apps.length === 0
        ? initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID })
        : apps[0];

    serverDataConnect = getDataConnect(serverApp, connectorConfig);

    if (process.env.NODE_ENV === "development") {
      connectDataConnectEmulator(serverDataConnect, "127.0.0.1", 9399);
    }
  }
}
