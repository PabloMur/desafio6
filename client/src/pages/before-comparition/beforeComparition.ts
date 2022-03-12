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
    const style = document.createElement("style");
    this.innerHTML = `
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
      const bothReady =
        cs.rtdbData.playerOne.start && cs.rtdbData.playerTwo.start;
      const replay = cs.rtdbData.replay === true;
      console.log(bothReady);

      const playerOneChoice = cs.rtdbData.playerOne.choice;
      const playerTwoChoice = cs.rtdbData.playerTwo.choice;

      if (playerOneChoice != "none" && playerTwoChoice != "none" && bothReady) {
        Router.go("/comparition");
      } else if (
        (playerOneChoice == "none" && bothReady) ||
        (playerTwoChoice == "none" && bothReady)
      ) {
        Router.go("/waiting");
      }
    });
  }
}

customElements.define("before-comparition", BeforeComparition);
