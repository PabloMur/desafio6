import "./pages/home-page/homePage";
import "./pages/access-page/accessPage";
import "./pages/new-room/newRoomPage";

import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/access-room", component: "access-page" },
  { path: "/new-room", component: "new-room-page" },
]);
