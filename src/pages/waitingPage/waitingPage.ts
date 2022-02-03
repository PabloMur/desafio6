import { state } from "../../state";
import { Router } from "@vaadin/router";

class WaitingPage extends HTMLElement {
  connectedCallback() {
    this.asksIfTheOtherPlayerChoosed();
  }
  cuentaRegresiva = 5;
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <p>Esperando que tu oponente elija una pieza</p>
        `;
  }
  asksIfTheOtherPlayerChoosed() {
    this.render();
    let setIN = setInterval(() => {
      const cs = state.getState();
      if (
        (this.cuentaRegresiva == 0 && cs.choice == "none") ||
        (this.cuentaRegresiva == 0 && cs.contrincanteChoice == "none")
      ) {
        clearInterval(setIN);
        Router.go("/result");
      } else if (cs.choice != "none" && cs.contrincanteChoice != "none") {
        clearInterval(setIN);
        Router.go("/before-comparition");
      }
      this.cuentaRegresiva--;
    }, 1000);
  }
}

customElements.define("waiting-page", WaitingPage);
