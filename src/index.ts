//Components
import "./components/header";
import "./components/customText";
import "./components/button";
import "./components/showName";
import "./components/columnContainer";
import "./components/roomCode";

import "./router.ts";
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
      roomGuest: "",
      rtdbData: {},
    });
  }
})();
