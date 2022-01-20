import firebase from "firebase";

const firebaseConfig = {
  apiKey: "JTDfzonOMV02qaufNecYor20EXITQIeDacrpL6JG",
  authDomain: "modulo6v3.firebaseapp.com",
  databaseURL: "https://modulo6v3-default-rtdb.firebaseio.com",
  projectId: "modulo6v3",
};

const app = firebase.initializeApp(firebaseConfig);
const rtdb = app.database();

export { rtdb };
