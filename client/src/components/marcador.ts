import { state } from "../state";
class Marcador extends HTMLElement {
  nombre: string;
  contrincanteNombre: string = "Contrincante";
  tu: number;
  contrincante: number;
  connectedCallback() {
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.rtdbData.playerOne.nombre;
    this.contrincante = lastState.score.guest;
    this.tu = lastState.score.local;
    this.contrincanteNombre = lastState.rtdbData.playerTwo.nombre;
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="marcador-container">
            <div class="marcador-el local">${this.nombre}:${this.tu}</div>
            <div class="marcador-el guest">${this.contrincanteNombre}:${this.contrincante}</div>
        </div>
        `;
    style.innerHTML = `
        .marcador-container{
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction:column;
            height: 10vh;
            width: 20vw;
        }
        .guest{
          color: red;
        }
    `;
    this.appendChild(style);
  }
}
customElements.define("custom-marcador", Marcador);
