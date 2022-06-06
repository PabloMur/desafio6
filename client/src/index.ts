import "./router.ts";
import "./pagesInit";
import "./componentsInit";

import { state } from "./state";
//import { Router } from "@vaadin/router";

(function () {
  if (localStorage.getItem("saved-state")) {
    state.init();
    //Router.go("/game-room");
  } else {
    state.setState({
      nombre: "",
      userId: "",
      roomId: "",
      rtdbRoomId: "",
      roomCreator: "",
      rtdbData: {
        playerOne: {
          nombre: "playerOne",
          choice: "none",
          start: false,
          online: true,
          creator: true,
          score: 0,
        },
        playerTwo: {
          nombre: "playerTwo",
          choice: "none",
          start: false,
          online: false,
          creator: false,
          score: 0,
        },
      },
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
    });
  }
})();
