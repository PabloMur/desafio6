import { state } from "../../state";
import { Router } from "@vaadin/router";
import { resolve } from "path/posix";

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
    this.render();
    const cs = state.getState();
    const playAgainButton = document.querySelector(".playAgainButton");
    playAgainButton.addEventListener("click", () => {
      if (cs.roomCreator) {
        state.playersChoice("local", "none", () => {
          location.reload();
        });
      } else if (!cs.roomCreator) {
        state.playersChoice("guest", "none", () => {
          location.reload();
        });
      }
    });
  }
}

customElements.define("result-room", ResultPage);
