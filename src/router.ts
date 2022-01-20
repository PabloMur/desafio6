import "./pages/home-page/homePage";
import "./pages/access-page/accessPage";

import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/access-room", component: "access-page" },
]);
