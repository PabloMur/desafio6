import * as admin from "firebase-admin";
import * as serviceAccount from "./key.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://mod6v4-default-rtdb.firebaseio.com" as any,
});

const firestore = admin.firestore();
const rtdb = admin.database() as any;

export { firestore, rtdb };

