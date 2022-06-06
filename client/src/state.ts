// const API_BASE = "https://desafio6pm.herokuapp.com";
type play = "piedra" | "papel" | "tijera";

const API_BASE = "http://localhost:3098";
import { rtdb } from "./rtdb";

const state = {
  data: {
    nombre: "",
    userId: "",
    roomId: "",
    rtdbRoomId: "",
    roomCreator: "",
    rtdbData: "",
    local: "",
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

  listenBothPlayersInRoom() {
    const currentState = this.getState();
    const rtdbroomId = currentState.rtdbRoomId;
    const gameRoomRef = rtdb.ref(`/gamerooms/${rtdbroomId}/playerTwo/online`);
    gameRoomRef.on("value", (snapshot) => {
      const cs = this.getState();
      const data = snapshot.val();
      cs.rtdbData = data.currentGame;
      this.setState(cs);
      console.log("Ambos conectados");
    });
  },

  //cambiar nombre de este metodo antes de deployar!!!
  listenPlayerChoice(cb?) {
    const cs = this.getState();

    const playerOneMoveREF = rtdb.ref(
      `gamerooms/${cs.rtdbRoomId}/currentGame/playerOne/choice`
    );

    playerOneMoveREF.once("value", (snap) => {
      const data = snap.val();
      cs.choice = data;
      this.setState(cs);

      if (cb) {
        cb();
      }
    });

    const playeTwoMoveREF = rtdb.ref(
      `gamerooms/${cs.rtdbRoomId}/currentGame/playerTwo/choice`
    );

    playeTwoMoveREF.once("value", (snap) => {
      const data = snap.val();
      cs.contrincanteChoice = data;
      this.setState(cs);
      if (cb) {
        cb();
      }
    });
  },

  getState() {
    return this.data;
  },
  //seteamos el nombre y el email del player en el state
  setNombreAndEmail(nombre: string, email: string) {
    const cs = this.getState();
    cs.nombre = nombre;
    cs.email = email;
    this.setState(cs);
  },

  //determinamos si es local o es invitado
  setLocalOrGuest(localOrGuest: boolean) {
    const cs = this.getState();
    cs.local = localOrGuest;
    this.setState(cs);
  },

  async createPlayer(cb?) {
    const cs = this.getState();
    const nombre = cs.nombre;
    const email = cs.email;
    const urlForFetch = API_BASE + "/signup";

    if (cs.email) {
      const fetchedData = await fetch(urlForFetch, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email, nombre: nombre }),
      });
      const response = await fetchedData.json();
      cs.registrated = true;
      cs.userId = response.id;

      console.log("Player creado");

      this.setState(cs);
      if (cb) cb();
    } else {
      console.error("no hay un mail en el state");
    }
  },

  async guestPlayer(callback?) {
    const cs = this.getState();
    const rtdbGameRoomId = await cs.rtdbGameRoomId;
    const nombre = await cs.nombre;

    try {
      const fetching = await fetch(API_BASE + "/player-guest", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          rtdbGameRoomId: rtdbGameRoomId,
        }),
      });
      console.log(nombre);

      const response = await fetching.json();
      console.log(response);

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  },

  async signIn(cb?) {
    const cs = this.getState();
    const urlForFetch = API_BASE + "/auth";

    if (cs.email) {
      const fetchedData = await fetch(urlForFetch, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: cs.email }),
      });
      const response = await fetchedData.json();
      cs.userId = response.id;
      this.setState(cs);
      if (cb) {
        cb();
      }
    } else {
      console.error("no hay un mail en el state");
    }
  },

  //creamos un usuario, que posteriormente va a crear una sala de juego
  // async newPlayer(nombre: string) {
  //   const cs = this.getState();
  //   try {
  //     const data = await fetch(API_BASE + "/player", {
  //       method: "post",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ nombre: nombre }),
  //     });

  //     const response = await data.json();

  //     cs.userId = await response.id;
  //     cs.nombre = nombre;

  //     await this.setState(cs);
  //     this.askNewGameRoom();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },

  async askNewGameRoom(callback?) {
    const cs = this.getState();
    try {
      const requestAskingNewGameroom = await fetch(API_BASE + "/game-rooms", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId: cs.userId, nombre: cs.nombre }),
      });
      const response = await requestAskingNewGameroom.json();
      cs.roomId = response.friendlyId;
      cs.rtdbRoomId = response.longGameRoomId;
      cs.roomCreator = true;
      this.setState(cs);
      if (callback) {
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  },

  async accesToGameRoom(callback?) {
    try {
      const cs = this.getState();
      const roomId = cs.roomId;
      const userId = cs.userId;
      const requestAccesing = await fetch(
        API_BASE + "/game-rooms/" + roomId + "?userId=" + userId,
        {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await requestAccesing.json();
      cs.rtdbRoomId = await data;
      cs.roomId = roomId;
      this.setState(cs);
      this.listenRTDBData();
      if (callback) {
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  },

  async playerIsOnline(localOrGuest, rtdbRoomId) {
    const cs = this.getState();

    const request = await fetch(API_BASE + "/online", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: rtdbRoomId,
      }),
    });

    const response = await request.json();
  },

  async playerIsReady(localOrGuest) {
    const cs = this.getState();
    const request = await fetch(API_BASE + "/start", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
      }),
    });
    const response = await request.json();
    console.log(response);
  },

  async playerUnstart(localOrGuest) {
    const cs = this.getState();

    const request = await fetch(API_BASE + "/unstart", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
      }),
    });

    const response = await request.json();
    console.log(response);
  },

  async playersChoice(localOrGuest, choice, cb?) {
    const cs = state.getState();

    const request = await fetch(API_BASE + "/choice", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        localOrGuest: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
        choice: choice,
      }),
    });

    const response = await request.json();

    if (cb) {
      cb();
    }
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
      state.setState(cs);
    }
    if (ganaGuest) {
      cs.score.guest++;
      if (iAmLocal) {
        cs.result = "perdiste";
      } else {
        cs.result = "ganaste";
      }
      state.setState(cs);
    }
    if (empate) {
      cs.result = "empataste";
      state.setState(cs);
    }
  },

  pushToHistory(currentGame) {
    return this.data.history.push(currentGame);
  },
};

export { state };
