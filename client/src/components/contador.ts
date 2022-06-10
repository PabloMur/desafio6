import { Router } from "@vaadin/router";
import { state } from "../state";

class Contador extends HTMLElement {
  shadow: ShadowRoot;
  cuentaRegresiva: number = 6;
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
          transform: translateY(-100%)
        }
        100%{
          transform: translateY(0%)
        }
      }
      `;
    this.shadow.appendChild(style);
  }
  cuentaAtras() {
    this.render();
    const contador = this.shadow.querySelector(".contador");

    let setIN = setInterval(() => {
      const cs = state.getState();
      const dataRealtime = cs.rtdbData;

      const terminoTiempo = this.cuentaRegresiva == 0;
      const noElegioNada =
        dataRealtime.playerOne.choice == "none" ||
        dataRealtime.playerTwo.choice == "none";

      if (terminoTiempo && noElegioNada) {
        if (cs.roomCreator) {
          cs.score.guest++;
        } else {
          cs.score.local++;
        }
        cs.result = "perdiste";
        clearInterval(setIN);
        Router.go("/result");
      }

      if (
        (cs.choice != "none" && cs.contrincanteChoice == "none") ||
        (cs.contrincanteChoice != "none" && cs.choice == "none")
      ) {
        clearInterval(setIN);
        Router.go("/before-comparition");
      }
      contador.innerHTML = this.cuentaRegresiva.toString();
      this.cuentaRegresiva--;
    }, 1000);
  }
  connectedCallback() {
    this.cuentaAtras();
  }
}

customElements.define("cuenta-regresiva", Contador);
