import { state } from "../../state";
import { Router } from "@vaadin/router";

class ChoosePage extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
      <div class="container">
          <cuenta-regresiva></cuenta-regresiva>
          <div class="contenedorDeManos">
            <game-option variant="piedra" class="piedra"></game-option>
            <game-option variant="papel" class="papel"></game-option>
            <game-option variant="tijera" class="tijera"></game-option>
          </div>
        </div>
      `;
    style.innerHTML = `
    .container{
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .contenedorDeManos {
      display: flex;
    }

    `;

    this.shadow.appendChild(style);
  }
  setingChoice() {
    this.render();
    const cs = state.getState();

    const tijera = this.shadow.querySelector(".tijera") as any;
    const papel = this.shadow.querySelector(".papel") as any;
    const piedra = this.shadow.querySelector(".piedra") as any;

    tijera.addEventListener("click", () => {
      if (cs.roomCreator) {
        state.playersChoice("playerOne", "tijera", () => {
          Router.go("/waiting");
        });
      } else {
        state.playersChoice("playerTwo", "tijera", () => {
          Router.go("/waiting");
        });
      }
    });

    papel.addEventListener("click", () => {
      if (cs.roomCreator) {
        state.playersChoice("playerOne", "papel", () => {
          console.log("papel");
          Router.go("/waiting");
        });
      } else {
        state.playersChoice("playerTwo", "papel", () => {
          Router.go("/waiting");
        });
      }
    });

    piedra.addEventListener("click", () => {
      if (cs.roomCreator) {
        state.playersChoice("playerOne", "piedra", () => {
          Router.go("/waiting");
        });
      } else {
        state.playersChoice("playerTwo", "piedra", () => {
          Router.go("/waiting");
        });
      }
    });
  }
  connectedCallback() {
    this.setingChoice();
  }
}
customElements.define("choose-room-page", ChoosePage);
