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
    });
  }
})();
