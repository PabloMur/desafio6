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
    const style = document.createElement("style") as any;
    style.innerHTML = `
      .container{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
      }
      custom-button{
        margin:10px;
      }
    `;
    this.shadow.appendChild(style);
  }
  addListeners() {
    this.render();
    const crear = this.shadow.querySelector(".crear") as any;
    const probar = this.shadow.querySelector(".test") as any;

    probar.addEventListener("click", function () {
      Router.go("/access-room");
    });

    crear.addEventListener("click", () => {
      state.signIn(() => {
        state.askNewGameRoom(() => {
          state.accesToGameRoom(() => {
            Router.go("/game-room");
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
