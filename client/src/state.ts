// const API_BASE = "https://desafio6pm.herokuapp.com";
type move = "piedra" | "papel" | "tijera";
type player = "playerOne" | "playerTwo";

const API_BASE = "http://localhost:3000";
import { rtdb } from "./rtdb";

const state = {
  data: {
    nombre: "",
    userId: "",
    roomId: "",
    rtdbRoomId: "",
    roomCreator: "",
    rtdbData: {},
    result: "",
    score: {
      playerOne: 0,
      playerTwo: 0,
    },
    replay: "",
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData as any));
  },

  listenRTDBData() {
    const currentState = this.getState();
    const gameRoomRef = rtdb.ref(
      "/gamerooms/" + currentState.rtdbRoomId + "/currentGame"
    );
    gameRoomRef.on("value", (snapshot) => {
      const data = snapshot.val();
      currentState.rtdbData = data;
      this.setState(currentState);
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

  whoWins(localMove: move, guestMove: move, callback) {
    const cs = state.getState();

    const pOneGanaConTijeras = localMove == "tijera" && guestMove == "papel";
    const pOneGanaConPiedra = localMove == "piedra" && guestMove == "tijera";
    const pOnelGanaConPapel = localMove == "papel" && guestMove == "piedra";

    const pTwoGanaConTijeras = localMove == "tijera" && guestMove == "piedra";
    const pTwoGanaConPapel = localMove == "papel" && guestMove == "tijera";
    const pTwoGanaConPiedra = localMove == "piedra" && guestMove == "papel";

    const ganaPlayerOne = [
      pOneGanaConPiedra,
      pOnelGanaConPapel,
      pOneGanaConTijeras,
    ].includes(true);

    const ganaPlayerTwo = [
      pTwoGanaConTijeras,
      pTwoGanaConPapel,
      pTwoGanaConPiedra,
    ].includes(true);

    const empate = localMove && guestMove;
    const iAmLocal = cs.roomCreator;

    if (ganaPlayerOne) {
      cs.score.playerOne++;
      cs.result = iAmLocal ? "ganaste" : "perdiste";
      state.setState(cs);
    }
    if (ganaPlayerTwo) {
      cs.score.playerTwo++;
      cs.result = iAmLocal ? "perdiste" : "ganaste";
      state.setState(cs);
    }
    if (empate) {
      cs.result = "empataste";
      state.setState(cs);
    }
    callback();
  },

  // pushToHistory(currentGame) {
  //   return this.data.history.push(currentGame);
  // },

  async createPlayer(cb?) {
    try {
      const cs = this.getState();
      const nombre = cs.nombre;
      const email = cs.email;
      const urlForFetch = API_BASE + "/signup";

      const fetchedData = await fetch(urlForFetch, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, nombre: nombre }),
      });

      const response = await fetchedData.json();

      cs.registrated = true;
      this.setState(cs);
      console.log("Player creado");

      if (cb) {
        cb();
      }
    } catch (error) {
      console.error(error);
    }
  },

  async guestPlayer(callback?) {
    try {
      const cs = this.getState();
      const rtdbGameRoomId = cs.rtdbRoomId;
      const nombre = cs.nombre;
      console.log(rtdbGameRoomId);

      const fetching = await fetch(API_BASE + "/player-guest", {
        mode: "cors",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          rtdbGameRoomId: rtdbGameRoomId,
        }),
      });

      const response = await fetching.json();

      if (callback) {
        callback();
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error(error);
    }
  },

  async signIn(cb?) {
    const cs = this.getState();

    if (cs.email) {
      const fetchedData = await fetch(API_BASE + "/auth", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        API_BASE + "/game-rooms/" + roomId + "?userId=" + userId
      );
      const data = await requestAccesing.json();
      cs.rtdbRoomId = data;
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

  async playerIsReady(localOrGuest: player) {
    //recibe "playerOne" o "playerTwo"
    const cs = this.getState();
    const request = await fetch(API_BASE + "/start", {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
      }),
    });
    const response = await request.json();
  },

  async playersChoice(localOrGuest: player, choice: move, callback?) {
    //recibe "playerOne" o "playerTwo"
    const cs = state.getState();
    const rtdbRoomId = cs.rtdbRoomId;

    const request = await fetch(API_BASE + "/choice", {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player: localOrGuest,
        rtdbRoomId: rtdbRoomId,
        choice: choice,
      }),
    });
    if (callback) {
      callback();
    }
  },

  async replay(callback?) {
    const cs = this.getState();
    const rtdbRoomId = cs.rtdbRoomId;
    await fetch(API_BASE + "/replay", {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rtdbRoomId: rtdbRoomId,
      }),
    });
    if (callback) {
      callback();
    }
  },

  async cleaningReplay(callback?) {
    const cs = this.getState();
    const rtdbRoomId = cs.rtdbRoomId;
    await fetch(API_BASE + "/clear-replay", {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rtdbRoomId: rtdbRoomId,
      }),
    });
    if (callback) {
      callback();
    }
  },

  async setScoreFirestore(cb?) {
    //osea que estamos guardando el ultimo score en la base de datos de firestore
    const cs = this.getState();
    const dataRealtime: any = cs.rtdbData;
    const roomid: string = cs.roomId;
    const scorePlayerOne: number = dataRealtime.playerOne.score;
    const scorePlayerTwo: number = dataRealtime.playerTwo.score;
    const urlForFetch = `${API_BASE}/last-score/${roomid}`;
    const lastScore = {
      one: scorePlayerOne,
      two: scorePlayerTwo,
    };
    await fetch(urlForFetch, {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastScore: lastScore,
      }),
    });
  },

  async getScoreFirestore(callback?) {
    const cs = this.getState();
    const dataRealtime: any = cs.rtdbData;
    const roomid: string = cs.roomId;
    const scorePlayerOne: number = dataRealtime.playerOne.score;
    const scorePlayerTwo: number = dataRealtime.playerTwo.score;
    const urlForFetch = `${API_BASE}/last-score/${roomid}`;
    const lastScore = {
      one: scorePlayerOne,
      two: scorePlayerTwo,
    };
    await fetch(urlForFetch, {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastScore: lastScore,
      }),
    });
  },
};

export { state };
