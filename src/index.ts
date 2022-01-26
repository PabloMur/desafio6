import "./router.ts";
import "./pages.ts";
import "./components.ts";

import { state } from "./state";
import { Router } from "@vaadin/router";

(function () {
  if (localStorage.getItem("saved-state")) {
    state.init();
    Router.go("/game-room");
  } else {
    state.setState({
      nombre: "",
      contrincanteNombre: "",
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
    });
  }
})();
