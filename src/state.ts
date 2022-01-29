// const API_BASE = "https://desafio6pm.herokuapp.com";
type play = "piedra" | "papel" | "tijera";

const API_BASE = "http://localhost:3002";
import { rtdb } from "./rtdb";

const state = {
  data: {
    nombre: "",
    contrincanteNombre: "Contrincante",
    userId: "",
    roomId: "",
    rtdbRoomId: "",
    roomCreator: "",
    roomGuest: "",
    rtdbData: "",
    online: false,
    history: [],
    score: {
      contrincante: 0,
      tu: 0,
    },
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },
  listenRTDBData() {
    const currentState = this.getState();
    const gameRoomRef = rtdb.ref("/gamerooms/" + currentState.rtdbRoomId);
    gameRoomRef.on("value", (snapshot) => {
      const cs = this.getState();
      const data = snapshot.val();
      cs.rtdbData = data.currentGame;
      this.setState(cs);
    });
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

  guestPlayer(nombre: string, rtdbRoomId: string) {
    const cs = this.getState();
    fetch(API_BASE + "/player-guest", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ nombre: nombre, rtdbGameRoomId: cs.rtdbRoomId }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        cs.userId = data.id;
        cs.nombre = nombre;
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
      body: JSON.stringify({ userId: cs.userId, nombre: cs.nombre }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        cs.roomId = data.friendlyId;
        cs.rtdbRoomId = data.longGameRoomId;
        cs.roomCreator = true;
        cs.roomGuest = false;
        this.listenRTDBData();
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
        this.listenRTDBData();
        this.setState(cs);
      });
  },
  playerIsOnline(localOrGuest, rtdbRoomId) {
    const cs = this.getState();
    fetch(API_BASE + "/online", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: rtdbRoomId,
      }),
    });
  },
  playerIsReady(localOrGuest, rtdbRoomId) {
    fetch(API_BASE + "/start", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: rtdbRoomId,
      }),
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
  whoWins(miJugada: play, PCjuagada: any) {
    const ganeConTijeras = miJugada == "tijera" && PCjuagada == "papel";
    const ganeConPiedra = miJugada == "piedra" && PCjuagada == "tijera";
    const ganeConPapel = miJugada == "papel" && PCjuagada == "piedra";

    const perdiConTijeras = miJugada == "tijera" && PCjuagada == "piedra";
    const perdiConPapel = miJugada == "papel" && PCjuagada == "tijera";
    const perdiConPiedra = miJugada == "piedra" && PCjuagada == "papel";

    const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);
    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijeras].includes(
      true
    );
    const empate = gane == perdi;

    if (gane) {
      const lastState = this.getState();
      this.setState({
        ...lastState,
        score: { tu: lastState.score.tu + 1, maquina: lastState.score.maquina },
        result: "gane",
      });
      return "gane";
    }
    if (perdi) {
      const lastState = this.getState();
      this.setState({
        ...lastState,
        score: { tu: lastState.score.tu, maquina: lastState.score.maquina + 1 },
        result: "perdi",
      });
      return "perdi";
    }
    if (empate) {
      const lastState = this.getState();
      this.setState({
        ...lastState,
        result: "empate",
      });
      return "empate";
    }
  },
};

export { state };
