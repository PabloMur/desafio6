import { state } from "../../state";
import { Router } from "@vaadin/router";

class WantReplay extends HTMLElement {
  shadow: ShadowRoot;
  clasStyle: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
      <div id="container" class="${this.clasStyle}">
        <custom-text>Tu contrincante quiere volver a jugar</custom-text>
        <custom-text>... Te animas?</custom-text>
        <custom-button class="aceptar">Aceptar</custom-button>
      </div>
      `;
    style.innerHTML = `
      .escondido{
        display:none;
      }
      .mostrado{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        background:black;
        height:100vh;
        width:100%;
        position: absolute;
        top:0;
        z-index: 5;
      }
    `;

    this.shadow.appendChild(style);
  }
  listeners() {
    const cs = state.getState();
    if (cs.rtdbData.replay == true) {
      this.clasStyle = "mostrado";
    } else {
      this.clasStyle = "escondido";
    }
    this.render();
    const button = this.shadow.querySelector(".aceptar") as any;
    button.addEventListener("click", async () => {
      await state.cleaningReplay(() => {
        Router.go("/instructions");
      });
    });
  }
  connectedCallback() {
    this.listeners();
  }
}
customElements.define("want-replay", WantReplay);
