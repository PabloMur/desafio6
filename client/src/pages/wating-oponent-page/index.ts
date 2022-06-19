import { Router } from "@vaadin/router";
import { state } from "../../state";

class WaitingOponent extends HTMLElement {
  shadow: ShadowRoot;
  cuentaRegresiva: number;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
            <div class="container">
              <custom-text>Esperemos a que tu contrincante esté listo para jugar!</custom-text>
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

      const playerOneListo =
        dataRealtime.playerOne.choice == "none" && dataRealtime.playerOne.start;
      const playerTwoListo =
        dataRealtime.playerTwo.choice == "none" && dataRealtime.playerTwo.start;

      if (playerOneListo && playerTwoListo) {
        clearInterval(setIN);
        Router.go("/choose");
      } else if (this.cuentaRegresiva == 0) {
        clearInterval(setIN);
        Router.go("/isntructions");
      }
      this.cuentaRegresiva--;
    }, 1000);
  }

  connectedCallback() {
    this.asksIfTheOtherPlayerChoosed();
  }
}
customElements.define("waiting-oponent-page", WaitingOponent);
