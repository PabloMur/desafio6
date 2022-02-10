import { Router } from "@vaadin/router";
import { state } from "../state";

class Contador extends HTMLElement {
  cuentaRegresiva: number = 3;
  connectedCallback() {
    this.cuentaAtras();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
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
    this.appendChild(style);
  }
  cuentaAtras() {
    this.render();
    const contador = document.querySelector(".contador");

    let setIN = setInterval(() => {
      const cs = state.getState();
      const terminoTiempo = this.cuentaRegresiva == 0;
      const noElegiNada =
        cs.rtdbData.playerOne.choice == "none" ||
        cs.rtdbData.playerTwo.choice == "none";

      if (terminoTiempo && noElegiNada) {
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
}

customElements.define("cuenta-regresiva", Contador);
