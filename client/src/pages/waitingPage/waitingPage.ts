import { state } from "../../state";
import { Router } from "@vaadin/router";

class WaitingPage extends HTMLElement {
  shadow: ShadowRoot;
  cuentaRegresiva: number;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.cuentaRegresiva = 15;
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
            <custom-text>Esperemos a que tu contrincante elija una opcion... Si no elije en los siguiente 15 segundos ganas esta partida picaronx</custom-text>
        `;
  }

  asksIfTheOtherPlayerChoosed() {
    this.render();
    let setIN = setInterval(() => {
      const cs = state.getState();
      const dataRealtime = cs.rtdbData;

      const playerOneEligio = dataRealtime.playerOne.choice != "none";
      const playerTwoEligio = dataRealtime.playerTwo.choice != "none";

      const playerOneNoEligio = !playerOneEligio;
      const playerTwoNoEligio = !playerTwoEligio;

      if (
        (this.cuentaRegresiva == 0 && playerOneNoEligio && playerTwoEligio) ||
        (this.cuentaRegresiva == 0 && playerOneEligio && playerTwoNoEligio)
      ) {
        clearInterval(setIN);
        Router.go("/result");
      } else if (playerOneEligio && playerTwoEligio) {
        clearInterval(setIN);
        Router.go("/comparition");
      }
      this.cuentaRegresiva--;
    }, 1000);
  }
  connectedCallback() {
    this.asksIfTheOtherPlayerChoosed();
  }
}

customElements.define("waiting-page", WaitingPage);
