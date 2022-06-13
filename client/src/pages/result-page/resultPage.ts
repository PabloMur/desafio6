import { state } from "../../state";
import { Router } from "@vaadin/router";

class ResultPage extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
    <div class="container">
      <star-comp></star-comp>
      <custom-score></custom-score>
      <custom-button class="playAgainButton">Volver a jugar</custom-button>
    </div>
    `;
    style.innerHTML = `
      .container{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        width: 100%;
        height:100vh;
      }
    `;
    this.shadow.appendChild(style);
  }
  sync() {
    this.render();
    const cs = state.getState();
    const playAgainButton = this.shadow.querySelector(
      ".playAgainButton"
    ) as any;
    playAgainButton.addEventListener("click", async () => {
      if (cs.rtdbData.replay) {
        await state.cleaningReplay(() => {
          Router.go("/instructions");
        });
      } else {
        await state.replay(() => {
          Router.go("/instructions");
        });
      }
    });
  }
  connectedCallback() {
    state.subscribe(() => {
      this.sync;
    });
    this.sync();
  }
}

customElements.define("result-room", ResultPage);
