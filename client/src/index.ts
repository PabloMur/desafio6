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
        },
        playerTwo: {
          nombre: "playerTwo",
          choice: "none",
          start: false,
          online: false,
          creator: false,
        },
      },
      result: "",
      score: {
        playerOne: 0,
        playerTwo: 0,
      },
      replay: false,
    });
  }
})();
