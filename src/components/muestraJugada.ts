import { state } from "../state";

class MuestraJugada extends HTMLElement {
  jugada: any = "none";
  connectedCallback() {
    state.subscribe(() => {
      this.render();
    });
    this.render();
  }
  render() {
    const cs = state.getState();
    this.innerHTML = `
    <p>jugada player One ${cs.rtdbData.playerOne.choice}</p>
    <p>jugada player Two ${cs.rtdbData.playerTwo.choice}</p>
    `;
  }
}

customElements.define("muestra-jugada", MuestraJugada);
