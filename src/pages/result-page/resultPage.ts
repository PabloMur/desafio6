import { state } from "../../state";
import { Router } from "@vaadin/router";
import { stat } from "fs";

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
    //state.listenRTDBData();
    const playerOnerReseting = async () => {
      await state.playersChoice("local", "none");
      await state.playerUnstart("local");
      Router.go("/instructions");
    };
    const playerTworReseting = async () => {
      console.log("listo guest");
      await state.playersChoice("guest", "none");
      await state.playerUnstart("guest");
      Router.go("/instructions");
    };

    const cs = state.getState();
    const playAgainButton = document.querySelector(".playAgainButton");
    playAgainButton.addEventListener("click", () => {
      if (cs.roomCreator) {
        playerOnerReseting();
      } else if (!cs.roomCreator) {
        playerTworReseting();
      }
    });
  }
}

customElements.define("result-room", ResultPage);
