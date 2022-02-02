import { Router } from "@vaadin/router";
import { state } from "../state";

class Contador extends HTMLElement {
  jugada: boolean = false;
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
      if (this.cuentaRegresiva == 0 && cs.choice == "none") {
        clearInterval(setIN);
        Router.go("/instructions");
      } else if (cs.choice != "none") {
        clearInterval(setIN);
        Router.go("/before-comparition");
      }
      contador.innerHTML = this.cuentaRegresiva.toString();
      this.cuentaRegresiva--;
    }, 1000);
  }
}

customElements.define("cuenta-regresiva", Contador);
