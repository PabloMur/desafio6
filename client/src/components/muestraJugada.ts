import { state } from "../state";

class MuestraJugada extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const cs = state.getState();
    const dataRealtime = cs.rtdbData;
    const style = document.createElement("style");

    this.shadow.innerHTML = `
      <div class="contenedor">
        <game-option class="playerOneMove" variant=${cs.rtdbData.playerOne.choice}></game-option>
        <game-option class="playerTwoMove" variant=${cs.rtdbData.playerTwo.choice}></game-option>
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
  connectedCallback() {
    state.subscribe(() => {
      this.render();
    });
    this.render();
  }
}

customElements.define("muestra-jugada", MuestraJugada);
