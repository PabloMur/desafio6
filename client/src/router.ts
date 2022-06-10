import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/access-room", component: "access-page" },

  { path: "/game-room", component: "game-room-page" },
  { path: "/pre-game-room", component: "pre-game-room-page" },
  { path: "/choose-room", component: "choose-room-page" },
  { path: "/instructions", component: "instructions-page" },
  { path: "/comparition", component: "comparition-page" },

  { path: "/waiting", component: "waiting-page" },
  { path: "/result", component: "result-room" },
  { path: "/path", component: "path-page" },
]);
