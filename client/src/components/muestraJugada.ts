import { state } from "../state";

class MuestraJugada extends HTMLElement {
  shadow: ShadowRoot;
  playerOneChoice: string;
  playerTwoChoice: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");

    this.shadow.innerHTML = `
      <div class="contenedor">
        <game-option class="playerOneMove" variant=${this.playerOneChoice}></game-option>
        <game-option class="playerTwoMove" variant=${this.playerTwoChoice}></game-option>
      </div>
    `;

    style.innerHTML = `
    .contenedor{
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
    }
    
    .playerTwoMove{
        margin: 0 auto;
        animation: fade .5s linear;
        transform: scale(1.3);
        
    }
    .playerOneMove{
        margin: 0 auto;
        transform: rotate(180deg)
                   scale(1.3);        
        animation: fadeInverted .5s linear;
    }

    @keyframes fade{
      0%{
        transform: translateY(100%)
                   scale(1.3);
      }
      100%{
        transform: translateY(0%)
                   scale(1.3);
      }
    }
    @keyframes fadeInverted{
        0%{
            transform: translateY(-500%)
                       rotate(180deg)
                       scale(1.3);
        }
        100%{
            transform: translateY(0%)
                       rotate(180deg)
                       scale(1.3);
        }
      }
    `;
    this.shadow.appendChild(style);
  }
  sync() {
    const cs = state.getState();
    this.playerOneChoice = cs.rtdbData.playerOne.choice;
    this.playerTwoChoice = cs.rtdbData.playerTwo.choice;
    this.render();
  }
  connectedCallback() {
    state.subscribe(() => {
      this.sync();
    });
    this.sync();
  }
}

customElements.define("muestra-jugada", MuestraJugada);
