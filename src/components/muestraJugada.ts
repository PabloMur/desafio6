import { state } from "../state";

class MuestraJugada extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const cs = state.getState();
    const style = document.createElement("style");
    this.innerHTML = `
      <game-option class="playerOneMove" variant=${cs.rtdbData.playerOne.choice}></game-option>
      <game-option class="playerTwoMove" variant=${cs.rtdbData.playerTwo.choice}></game-option>
    `;
    this.className = "contenedor";

    state.whoWins(cs.rtdbData.playerOne.choice, cs.rtdbData.playerTwo.choice);

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
    this.appendChild(style);
  }
}

customElements.define("muestra-jugada", MuestraJugada);
