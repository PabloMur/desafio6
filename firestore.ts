import * as admin from "firebase-admin";

const serviceAccount = require("./key/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://modulo6v3-default-rtdb.firebaseio.com",
});

const firestore = admin.firestore();
const rtdb = admin.database();

export { firestore, rtdb };
