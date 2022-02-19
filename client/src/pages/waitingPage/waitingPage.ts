import { state } from "../../state";
import { Router } from "@vaadin/router";

class WaitingPage extends HTMLElement {
  connectedCallback() {
    this.asksIfTheOtherPlayerChoosed();
  }

  cuentaRegresiva = 15;

  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <custom-text>Esperemos a que tu contrincante elija una opcion... Si no elije en los siguiente 15 segundos ganas esta partida picaronx</custom-text>
        `;
  }

  asksIfTheOtherPlayerChoosed() {
    this.render();
    let setIN = setInterval(() => {
      const cs = state.getState();

      const playerOneEligio = cs.choice != "none";
      const playerTwoEligio = cs.contrincanteChoice != "none";

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
}

customElements.define("waiting-page", WaitingPage);
