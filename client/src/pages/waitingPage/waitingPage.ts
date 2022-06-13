import { state } from "../../state";
import { Router } from "@vaadin/router";

class WaitingPage extends HTMLElement {
  shadow: ShadowRoot;
  cuentaRegresiva: number = 15;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
            <div class="container">
              <custom-text>Esperemos a que tu contrincante elija una opcion... 
              Si no elije en los siguientes ${this.cuentaRegresiva} 
              segundos ganas esta partida!</custom-text>
            </div>
        `;
    style.innerHTML = `
      .container{
        display: flex;
        justify-content:center;
        align-items:center;
        height: 100vh;
        width: 100vw;
      }
    `;
    this.shadow.appendChild(style);
  }

  asksIfTheOtherPlayerChoosed() {
    const setIN = setInterval(() => {
      this.render();
      const cs = state.getState();
      const dataRealtime = cs.rtdbData;

      const playerOneEligio = dataRealtime.playerOne.choice != "none";
      const playerTwoEligio = dataRealtime.playerTwo.choice != "none";

      const playerOneNoEligio = !playerOneEligio;
      const playerTwoNoEligio = !playerTwoEligio;

      if (
        (!cs.roomCreator &&
          this.cuentaRegresiva == 0 &&
          playerOneNoEligio &&
          playerTwoEligio) ||
        (cs.roomCreator &&
          this.cuentaRegresiva == 0 &&
          playerOneEligio &&
          playerTwoNoEligio)
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
