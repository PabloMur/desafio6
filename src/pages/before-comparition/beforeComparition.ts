import { Router } from "@vaadin/router";
import { state } from "../../state";

class BeforeComparition extends HTMLElement {
  connectedCallback() {
    state.subscribe(() => {
      this.sync();
    });
    this.sync();
  }
  render(cb?) {
    const cs = state.getState();
    const style = document.createElement("style");
    this.innerHTML = `
    <p class="waitingMessage">Esperando que tu oponente elija una opcion!</p>
    <p>Player One => ${cs.choice}</p>
    <p>Player Two => ${cs.contrincanteChoice}</p>
    <custom-button class="comparar escondido">Comparar</custom-button>
    `;
    style.innerHTML = `
      .escondido{
        display:none;
      }
      .mostrado{
        display: block;
      }
    `;
    this.appendChild(style);
    if (cb) {
      cb();
    }
  }
  sync() {
    state.testParaEscucharSiLosDosJugadoresYaElijieron();
    this.render(() => {
      const cs = state.getState();
      const button = document.querySelector(".comparar");
      if (
        cs.rtdbData.playerTwo.choice !== "none" ||
        cs.rtdbData.playerOne.choice !== "none"
      ) {
        button.classList.remove("escondido");
        button.classList.add("mostrado");
      } else if (cs.contrincanteChoice == "none" || cs.choice == "none") {
        Router.go("/waiting");
      }

      button.addEventListener("click", () => {
        Router.go("/comparition");
      });
    });
  }
}

customElements.define("before-comparition", BeforeComparition);
