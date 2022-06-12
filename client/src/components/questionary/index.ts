import { state } from "../../state";
import { Router } from "@vaadin/router";


class Questinary extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    this.shadow.innerHTML = `
            <div class="container">
                <custom-button class="crear">Crear una nueva Sala</custom-button>
                <custom-button class="test">Ingresar a una Sala</custom-button>
            </div>
        `;
  }
  addListeners() {
    this.render();
    const crear = this.shadow.querySelector(".crear") as any;
    const probar = this.shadow.querySelector(".test") as any;

    probar.addEventListener("click", function () {
      Router.go("/access-room");
    });

    crear.addEventListener("click", () => {
      Router.go("/game-room");
      state.signIn(() => {
        state.askNewGameRoom(() => {
          state.accesToGameRoom(() => {
            state.listenRTDBData();
          });
        });
      });
    });
  }
  connectedCallback() {
    this.addListeners();
  }
}
customElements.define("custom-questionary", Questinary);
