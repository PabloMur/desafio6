import { Router } from "@vaadin/router";
import { state } from "../state";

class Contador extends HTMLElement {
  shadow: ShadowRoot;
  cuentaRegresiva: number = 10;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
    <div class="contador"></div>`;
    style.innerHTML = `
    .contador{
        height: 300px;
        width: 300px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 100px;
        animation: fade .5s linear;
      }
      @keyframes fade{
        0%{
          opacity:0;
        }
        100%{
          opacity:1;
        }
      }
      `;
    this.shadow.appendChild(style);
  }
  async cuentaAtras() {
    const setIN = setInterval(() => {
      this.render();
      const contador = this.shadow.querySelector(".contador") as any;
      const cs = state.getState();

      const terminoTiempo = this.cuentaRegresiva == 0;
      const playerOneNoEligio = cs.rtdbData.playerOne.choice == "none";
      const playerTwoNoEligio = cs.rtdbData.playerTwo.choice == "none";

      if (terminoTiempo) {
        clearInterval(setIN);
        if (playerOneNoEligio && playerTwoNoEligio) {
          state.replay(() => {
            Router.go("/instructions");
          });
        } else if (cs.roomCreator && playerOneNoEligio) {
          state.growScore("playerTwo", () => {
            cs.result = "perdiste";
            state.setState(cs);
            Router.go("/result");
          });
        } else if (!cs.roomCreator && playerTwoNoEligio) {
          state.growScore("playerOne", () => {
            cs.result = "perdiste";
            state.setState(cs);
            Router.go("/result");
          });
        }
      } else if (!playerOneNoEligio && !playerTwoNoEligio) {
        clearInterval(setIN);
      }

      contador.innerHTML = `${this.cuentaRegresiva}`;
      this.cuentaRegresiva--;
    }, 1000);
  }
  connectedCallback() {
    this.cuentaAtras();
  }
}

customElements.define("cuenta-regresiva", Contador);
