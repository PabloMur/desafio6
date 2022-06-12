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
  // const cs = state.getState();
  // const dataRealtime = cs.rtdbData;
  // const terminoTiempo = this.cuentaRegresiva == 0;
  // const soyPlayerOne = cs.roomCreator;
  // const soyPlayerTwo = !soyPlayerOne;
  // const playerOneNoEligio = (dataRealtime.playerOne.choice = "none");
  // const playerTwoNoEligio = (dataRealtime.playerTwo.choice = "none");
  // const ambosElegimos =
  //   dataRealtime.playerOne.choice != "none" &&
  //   dataRealtime.playerTwo.choice != "none";

  // if (ambosElegimos) {
  //   clearInterval(setIN);
  //   Router.go("/comparition");
  // } else if (terminoTiempo && soyPlayerOne && playerTwoNoEligio) {
  //   clearInterval(setIN);
  //   cs.score.playerOne++;
  //   cs.result = "ganaste";
  //   state.setState(cs);
  //   Router.go("/result");
  // } else if (terminoTiempo && soyPlayerTwo && playerOneNoEligio) {
  //   clearInterval(setIN);
  //   cs.score.playerTwo++;
  //   cs.result = "ganaste";
  //   state.setState(cs);
  //   Router.go("/result");
  // }

  connectedCallback() {
    this.asksIfTheOtherPlayerChoosed();
  }
}

customElements.define("waiting-page", WaitingPage);
