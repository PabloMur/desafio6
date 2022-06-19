import { state } from "../state";

class StarComp extends HTMLElement {
  img: string;
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadow.innerHTML = `
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
      }
     .scoreCont{
        height: 245px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
      }`;

    this.shadow.appendChild(style);
  }
  sync() {
    const ganaste = require("../img/ganaste.png");
    const perdiste = require("../img/perdiste.png");
    const empataste = require("../img/empataste.png");

    const lastState = state.getState();

    if (lastState.result == "perdiste") this.img = perdiste;
    if (lastState.result == "ganaste") this.img = ganaste;
    if (lastState.result == "empataste") this.img = empataste;

    this.render();
  }
  connectedCallback() {
    state.subscribe(() => {
      this.sync();
    });
    this.sync();
  }
}

customElements.define("star-comp", StarComp);
