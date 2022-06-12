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

    const setIN = setInterval(() => {
      const contador = this.shadow.querySelector(".contador") as any;
      const cs = state.getState();

      const terminoTiempo = this.cuentaRegresiva == 0;

      const soyPlayerOneYNoEleginada =
        cs.roomCreator && cs.rtdbData.playerOne.choice == "none";
      const soyPlayerTwoYNoElegiNada =
        !cs.roomCreator && cs.rtdbData.playerTwo.choice == "none";

      if (terminoTiempo && soyPlayerOneYNoEleginada) {
        clearInterval(setIN);
        cs.score.playerTwo++;
        cs.result = "perdiste";
        state.setState(cs);
        Router.go("/result");
      }
      if (terminoTiempo && soyPlayerTwoYNoElegiNada) {
        clearInterval(setIN);
        cs.score.playerOne++;
        cs.result = "perdiste";
        state.setState(cs);
        Router.go("/result");
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
