// const API_BASE = "https://desafio6pm.herokuapp.com";
type play = "piedra" | "papel" | "tijera";

const API_BASE = "http://localhost:3000";
import { rtdb } from "./rtdb";

const state = {
  data: {
    nombre: "",
    userId: "",
    roomId: "",
    rtdbRoomId: "",
    roomCreator: "",
    rtdbData: "",
    result: "",
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
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

  //cambiar nombre de este metodo antes de deployar!!!
  // listenPlayerChoice(cb?) {
  //   const cs = this.getState();

  //   const playerOneMoveREF = rtdb.ref(
  //     `gamerooms/${cs.rtdbRoomId}/currentGame/playerOne/choice`
  //   );

  //   playerOneMoveREF.once("value", (snap) => {
  //     const data = snap.val();
  //     cs.choice = data;
  //     this.setState(cs);

  //     if (cb) {
  //       cb();
  //     }
  //   });

  //   const playeTwoMoveREF = rtdb.ref(
  //     `gamerooms/${cs.rtdbRoomId}/currentGame/playerTwo/choice`
  //   );

  //   playeTwoMoveREF.once("value", (snap) => {
  //     const data = snap.val();
  //     cs.contrincanteChoice = data;
  //     this.setState(cs);
  //     if (cb) {
  //       cb();
  //     }
  //   });
  // },

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
    const urlForFetch = API_BASE + "/auth";

    if (cs.email) {
      const fetchedData = await fetch(urlForFetch, {
        method: "POST",
        mode: "cors",
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
      console.log("escuchando");

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  },

  // async guestAccesToGameRoom(callback?) {
  //   try {
  //     const cs = this.getState();
  //     const roomId = cs.roomId;
  //     const userId = cs.userId;
  //     const requestAccesing = await fetch(
  //       API_BASE + "/game-rooms/" + roomId + "?userId=" + userId
  //     );
  //     const data = await requestAccesing.json();
  //     cs.rtdbRoomId = await data;
  //     this.setState(cs);
  //     if (callback) {
  //       callback();
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },

  async playerIsReady(localOrGuest) {
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
    //this.listenRTDBData();
  },

  async playerUnstart(localOrGuest) {
    //recibe "playerOne" o "playerTwo"
    const cs = this.getState();

    const request = await fetch(API_BASE + "/unstart", {
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
    console.log(response);
  },

  async playersChoice(localOrGuest, choice, cb?) {
    //recibe "playerOne" o "playerTwo"
    const cs = state.getState();

    const request = await fetch(API_BASE + "/choice", {
      mode: "cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        localOrGuest: localOrGuest,
        rtdbRoomId: cs.rtdbRoomId,
        choice: choice,
      }),
    });
    if (cb) {
      cb();
    }
  },
  async setScoreFirestore(cb?) {
    const cs = this.getState();
    const roomid = cs.roomId;
    const scorePlayerOne = cs.rtdbData.playerOne.score;
    const scorePlayerTwo = cs.rtdbData.playerTwo.score;
    const urlForFetch = `${API_BASE}/last-score/${roomid}`;
    const lastScore = {
      one: scorePlayerOne,
      two: scorePlayerTwo,
    };
    const request = await fetch(urlForFetch, {
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
