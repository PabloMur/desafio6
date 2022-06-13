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
      userId: "",
      roomId: "",
      rtdbRoomId: "",
      roomCreator: "",
      rtdbData: {
        replay: false,
        playerOne: {
          nombre: "playerOne",
          choice: "none",
          start: false,
          creator: true,
          score: 0,
        },
        playerTwo: {
          nombre: "playerTwo",
          choice: "none",
          start: false,
          creator: false,
          score: 0,
        },
      },
      result: "",
    });
  }
})();
