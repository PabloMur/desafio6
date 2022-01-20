const API_BASE = "http://localhost:3000";
import { rtdb } from "./rtdb";
import * as map from "lodash/map";
const state = {
  data: {
    nombre: "",
    messages: [""],
  },
  listeners: [],

  init() {
    const chatroomRef = rtdb.ref("/chatrooms/general");
    const currentState = this.getState();
    chatroomRef.on("value", (snapshot) => {
      const messagesFromServer = snapshot.val();
      currentState.messages = map(messagesFromServer.messages);
      this.setState(currentState);
    });
  },

  getState() {
    return this.data;
  },
  setNombre(nombre: string) {
    const currentState = this.getState();
    currentState.nombre = nombre;
    this.setState(currentState);
  },
  pushMessage(message: string) {
    const nombreDelState = this.data.nombre;
    fetch(API_BASE + "/messages", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        from: nombreDelState,
        message: message,
      }),
    });
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("Soy el state, he cambiado", this.data);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
