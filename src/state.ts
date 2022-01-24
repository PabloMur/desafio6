const API_BASE = "http://localhost:3002";
import { rtdb } from "./rtdb";
const state = {
  data: {
    nombre: "",
    userId: "",
    roomId: "",
    rtdbRoomId: "",
    roomCreator: "",
    roomGuest: "",
    rtdbData: {},
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },
  getState() {
    return this.data;
  },
  setNombre(nombre: string) {
    const cs = this.getState();
    cs.nombre = nombre;
    this.setState(cs);
  },
  newPlayer(nombre: string) {
    const cs = this.getState();
    fetch(API_BASE + "/player", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ nombre: nombre }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        cs.userId = data.id;
        cs.nombre = nombre;
        this.askNewGameRoom();
        return true;
      })
      .then(() => {
        this.setState(cs);
      });
  },
  askNewGameRoom() {
    const cs = this.getState();
    fetch(API_BASE + "/game-rooms", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userId: cs.userId }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        cs.roomId = data.friendlyId;
        cs.rtdbRoomId = data.longGameRoomId;
        cs.roomCreator = true;
        cs.roomGuest = false;
        this.setState(cs);
      });
  },
  accesToGameRoom(roomId: string) {
    const cs = this.getState();
    fetch(API_BASE + "/game-rooms/" + roomId, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        cs.roomGuest = true;
        cs.roomCreator = false;
        cs.rtdbRoomId = data;
        cs.roomId = roomId;
        this.setState(cs);
      });
  },
  listenRTDBData() {
    const gameRoomRef = rtdb.ref(`gamerooms/${this.data.rtdbRoomId}`);
    gameRoomRef.on("value", (snapshot) => {
      const cs = this.getState();
      const dataFromServer = snapshot.val();
      cs.rtdbData = dataFromServer.rtdbData;
      this.setState(cs);
    });
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
    console.log("Soy el state, he cambiado", this.data);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
