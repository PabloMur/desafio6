import { state } from "../state";

class StarComp extends HTMLElement {
  img: string;

  connectedCallback() {
    this.render();
  }

  render = () => {
    const ganaste = require("../img/ganaste.svg") as any;
    const perdiste = require("../img/perdiste.svg") as any;
    const empataste = require("../img/empataste.svg") as any;

    const lastState = state.getState();
    if (lastState.result == "perdiste") {
      this.img = perdiste;
    }
    if (lastState.result == "ganaste") {
      this.img = ganaste;
    }
    if (lastState.result == "empataste") {
      this.img = empataste;
    }
    this.innerHTML = `
        <div class="scoreCont">
          <img class="starEl" src=${this.img}/>
        </div>
      `;

    const style = document.createElement("style");
    style.innerHTML = `
          .starEl{
              height: 200px;
              width: auto;
              animation:lower 3s linear infinite;
              z-index: 2;
              background: url("../img/ganaste.svg");
          }
          .scoreCont{
              height: 245px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          .ganaste{
          }


          @keyframes lower{
              0%{
                  transform: translateY(0%);
              }
              50%{
                transform: translateY(5%);
              }
              100%{
                transform: translateY(0%);
              }
          }
      `;

    this.appendChild(style);
  };
}

customElements.define("star-comp", StarComp);
