import { state } from "../../state";
import { Router } from "@vaadin/router";

class ResultPage extends HTMLElement {
  connectedCallback() {
    this.sync();
  }
  render() {
    this.innerHTML = `
            <star-comp></star-comp>
            <custom-score></custom-score>
            <custom-button class="playAgainButton">Volver a jugar</custom-button>
        `;
  }
  sync() {
    const cs = state.getState();
    const local = cs.roomCreator;
    this.render();
    const playAgainButton = document.querySelector(".playAgainButton");
    state.playersChoice("local", "none");
    state.playersChoice("guest", "none");
    playAgainButton.addEventListener("click", () => {
      Router.go("/game-room");
    });
  }
}

customElements.define("result-room", ResultPage);
