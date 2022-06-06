import { state } from "../../state";
import { Router } from "@vaadin/router";

class Questinary extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  addListeners() {
    const ingresar = document.querySelector(".ingresar");
    const crear = document.querySelector(".crear");
    const cs = state.getState();
    const nombre = cs.nombre;

    ingresar.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("ingresar a sala");
    });

    crear.addEventListener("click", () => {
      Router.go("/game-room");
      state.signIn(() => {
        state.askNewGameRoom(() => {
          state.accesToGameRoom();
        });
      });
    });
  }
  render() {
    this.innerHTML = `
            <div class="container">
                <custom-button class="crear">Crear una nueva Sala</custom-button>
                <custom-button class="ingresar">Ingresar a una Sala</custom-button>
            </div>
        `;
    this.addListeners();
  }
}
customElements.define("custom-questionary", Questinary);
