import { state } from "../state";
class Marcador extends HTMLElement {
  shadow: ShadowRoot;
  playerOneName: string;
  playerTwoName: string;
  playerOneScore: number;
  playerTwoScore: number;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
        <div class="marcador-container">
            <div class="marcador-el local">${this.playerOneName}:${this.playerOneScore}</div>
            <div class="marcador-el guest">${this.playerTwoName}:${this.playerTwoScore}</div>
        </div>
        `;
    style.innerHTML = `
        .marcador-container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction:column;
            height: 10vh;
            width: auto;
            margin: 20px;
        }

        .marcador-el{
          color: black;
          font-size: 25px;
          font-family: sans-serif;
          text-align:end;
          width: 100%;;
        }

    `;
    this.shadow.appendChild(style);
  }
  syncWithState() {
    const lastState = state.getState();
    const data = lastState.rtdbData;

    //playerOne name and score
    this.playerOneName = data.playerOne.nombre;
    this.playerOneScore = data.playerOne.score;

    //playerOne name and score
    this.playerTwoName = data.playerTwo.nombre;
    this.playerTwoScore = data.playerTwo.score;

    this.render();
  }
  connectedCallback() {
    this.syncWithState();
  }
}
customElements.define("custom-marcador", Marcador);
