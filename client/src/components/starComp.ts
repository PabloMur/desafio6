import { state } from "../state";

class StarComp extends HTMLElement {
  img: string;
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const ganaste = require("url:../img/ganaste.svg");
    const perdiste = require("url:../img/perdiste.svg");
    const empataste = require("url:../img/empataste.svg");

    const lastState = state.getState();

    if (lastState.result == "perdiste") this.img = perdiste;
    if (lastState.result == "ganaste") this.img = ganaste;
    if (lastState.result == "empataste") this.img = empataste;

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
        background: url("../img/ganaste.svg");
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
  connectedCallback() {
    state.subscribe(() => {
      this.render();
    });
    this.render();
  }
}

customElements.define("star-comp", StarComp);
