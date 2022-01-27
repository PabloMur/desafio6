import { state } from "../state";
class Marcador extends HTMLElement {
  nombre: string;
  tu: number;
  contrincante: number;
  contrincanteNombre: string = "Contrincante";
  connectedCallback() {
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.rtdbData.playerOne.nombre;
    this.contrincante = lastState.score.contrincante;
    this.tu = lastState.score.tu;
    this.contrincanteNombre = lastState.rtdbData.playerTwo.nombre;
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="marcador-container">
            <div class="marcador-el" class="local">${this.nombre}:${this.tu}</div>
            <div class="marcador-el"class="guest">${this.contrincanteNombre}:${this.contrincante}</div>
        </div>
        `;
    style.innerHTML = `
        .marcador-container{
            display: flex;
            flex-direction:column;
            background: orange;
            height: 20vh;
            width: 20vw;
        }
    `;
    this.appendChild(style);
  }
}
customElements.define("custom-marcador", Marcador);
