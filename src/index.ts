import "./router.ts";
import "./pagesInit";
import "./componentsInit";

import { state } from "./state";
import { Router } from "@vaadin/router";

(function () {
  if (localStorage.getItem("saved-state")) {
    state.init();
    Router.go("/game-room");
  } else {
    state.setState({
      nombre: "",
      contrincanteNombre: "Contrincante",
      userId: "",
      roomId: "",
      rtdbRoomId: "",
      roomCreator: "",
      roomGuest: "",
      rtdbData: "",
      online: false,
      choice: "none",
      history: [],
      score: {
        contrincante: 0,
        tu: 0,
      },
    });
  }
})();
