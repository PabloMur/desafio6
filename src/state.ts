// const API_BASE = "https://desafio6pm.herokuapp.com";
type play = "piedra" | "papel" | "tijera";

const API_BASE = "https://desafio6pm.herokuapp.com";
import { rtdb } from "./rtdb";

const state = {
  data: {
    nombre: "",
    userId: "",
    roomId: "",
    rtdbRoomId: "",
    roomCreator: "",
    rtdbData: "",
    online: false,
    choice: "none",
    contrincanteChoice: "none",
    history: [],
    result: "",
    currentGame: { playerOneMove: "", playerTwoMove: "" },
    score: {
      local: 0,
      guest: 0,
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
  //cambiar nombre de este metodo antes de deployar!!!
  testParaEscucharSiLosDosJugadoresYaElijieron(cb?) {
    const cs = this.getState();

    const playerOneMoveREF = rtdb.ref(
      `gamerooms/${cs.rtdbRoomId}/currentGame/playerOne/choice`
    );
    playerOneMoveREF.on("value", (snap) => {
      const cs = this.getState();
      const data = snap.val();
      cs.choice = data;
      this.setState(cs);
      console.log(data);

      if (cb) {
        cb();
      }
    });

    const playeTwoMoveREF = rtdb.ref(
      `gamerooms/${cs.rtdbRoomId}/currentGame/playerTwo/choice`
    );
    playeTwoMoveREF.on("value", (snap) => {
      const cs = this.getState();
      const data = snap.val();
      cs.contrincanteChoice = data;
      this.setState(cs);
      console.log(data);
      if (cb) {
        cb();
      }
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
    })
      .then((resp) => {
        return resp.json();
      })
      .then((r) => {
        this.listenRTDBData();
        console.log(r);
      });
  },
  playerIsReady(localOrGuest) {
    const cs = this.getState();
    fetch(API_BASE + "/start", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((r) => {
        console.log(r);
      });
  },
  playersChoice(localOrGuest, choice, cb?) {
    const cs = state.getState();
    fetch(API_BASE + "/choice", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        localOrGuest: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
        choice: choice,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log(resp);
        this.listenRTDBData();
        if (cb) {
          cb();
        }
      });
  },
  playersResetingChoice(localOrGuest, cb?) {
    const cs = this.getState();
    fetch(API_BASE + "/unchoose", {
      method: "post",
      headers: {
        "content-type": "application-json",
      },
      body: JSON.stringify({
        localOrGuest: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((d) => {
        console.log(d);
        if (cb) {
          cb();
        }
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
  whoWins(localMove, guestMove) {
    const localGanaConTijeras = localMove == "tijera" && guestMove == "papel";
    const localGanaConPiedra = localMove == "piedra" && guestMove == "tijera";
    const localGanaConPapel = localMove == "papel" && guestMove == "piedra";

    const guestGanaConTijeras = localMove == "tijera" && guestMove == "piedra";
    const guestGanaConPapel = localMove == "papel" && guestMove == "tijera";
    const guestGanaConPiedra = localMove == "piedra" && guestMove == "papel";

    const ganaLocal = [
      localGanaConTijeras,
      localGanaConPiedra,
      localGanaConPapel,
    ].includes(true);
    const ganaGuest = [
      guestGanaConTijeras,
      guestGanaConPapel,
      guestGanaConPiedra,
    ].includes(true);
    const empate = ganaLocal == ganaGuest;
    const cs = state.getState();
    const iAmLocal = cs.roomCreator;

    if (ganaLocal) {
      cs.score.local++;
      if (iAmLocal) {
        cs.result = "ganaste";
      } else {
        cs.result = "perdiste";
      }
    }
    if (ganaGuest) {
      cs.score.guest++;
      if (iAmLocal) {
        cs.result = "perdiste";
      } else {
        cs.result = "ganaste";
      }
    }
    if (empate) {
      cs.result = "empataste";
    }
  },
};

export { state };
