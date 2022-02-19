import { state } from "../../state";
import { Router } from "@vaadin/router";

class ChoosePage extends HTMLElement {
  connectedCallback() {
    this.setingChoice();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
          <cuenta-regresiva></cuenta-regresiva>
          <div class="contenedorDeManos">
            <game-option variant="tijera" class="tijera"></game-option>
            <game-option variant="papel" class="papel"></game-option>
            <game-option variant="piedra" class="piedra"></game-option>
          </div>
        </div>
      `;
    style.innerHTML = `
    .container{
      height: 90vh;
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

    this.appendChild(style);
  }
  setingChoice() {
    this.render();
    const cs = state.getState();

    const tijera = document.querySelector(".tijera");
    const papel = document.querySelector(".papel");
    const piedra = document.querySelector(".piedra");

    tijera.addEventListener("click", () => {
      if (cs.roomCreator == true) {
        state.playersChoice("local", "tijera", () => {
          cs.choice = "tijera";
          state.setState(cs);
        });
        Router.go("/before-comparition");
      } else if (cs.roomCreator == false) {
        state.playersChoice("guest", "tijera", () => {
          cs.contrincanteChoice = "tijera";
          state.setState(cs);
        });
        Router.go("/before-comparition");
      }
    });
    papel.addEventListener("click", () => {
      if (cs.roomCreator == true) {
        state.playersChoice("local", "papel", () => {
          cs.choice = "papel";
          state.setState(cs);
        });
        Router.go("/before-comparition");
      } else if (cs.roomCreator == false) {
        state.playersChoice("guest", "papel", () => {
          cs.contrincanteChoice = "papel";
          state.setState(cs);
        });
        Router.go("/before-comparition");
      }
    });
    piedra.addEventListener("click", () => {
      if (cs.roomCreator == true) {
        state.playersChoice("local", "piedra", () => {
          cs.choice = "piedra";
          state.setState(cs);
        });
        Router.go("/before-comparition");
      } else if (cs.roomCreator == false) {
        state.playersChoice("guest", "piedra", () => {
          cs.contrincanteChoice = "piedra";
          state.setState(cs);
        });
        Router.go("/before-comparition");
      }
    });
  }
}
customElements.define("choose-room-page", ChoosePage);
