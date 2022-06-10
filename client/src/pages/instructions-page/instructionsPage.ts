import { Router } from "@vaadin/router";
import { state } from "../../state";

class instructions extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
          <div class="contenedor">
            <p class="instructions">
                Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
                Suerte!
            </p>
            <custom-button class="play-button">Jugar!</custom-button>
          </div>
        `;
    style.innerHTML = `
    .contenedor{
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

    }
    .instructions{
      font-size: 45px;
      display: block;
      height: auto;
      max-width: 600px;
      text-align: center;
      animation: fade .7s ease;
    }
    @keyframes fade{
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }`;
    this.shadow.appendChild(style);
  }
  userIsReady() {
    this.render();
    const cs = state.getState();
    const playButton = this.shadow.querySelector(".play-button");

    playButton.addEventListener("click", () => {
      if (cs.roomCreator) {
        state.playerIsReady("playerOne");
        Router.go("/choose-room");
      } else if (!cs.roomCreator) {
        state.playerIsReady("playerTwo");
        Router.go("/choose-room");
      }
    });
  }
  connectedCallback() {
    this.userIsReady();
  }
}
customElements.define("instructions-page", instructions);
