import { Router } from "@vaadin/router";
import { state } from "../../state";

class instructions extends HTMLElement {
  connectedCallback() {
    this.userIsReady();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <p class="instructions">
                Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
                Suerte!
            </p>
            <custom-button class="play-button">Jugar!</custom-button>
        `;
    this.className = "contenedor";
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
    this.appendChild(style);
  }
  userIsReady() {
    this.render();
    const cs = state.getState();
    const playButton = document.querySelector(".play-button");

    playButton.addEventListener("click", () => {
      if (cs.roomCreator == true) {
        state.playerIsReady("local");
        Router.go("/choose-room");
      } else if (cs.roomCreator == false) {
        state.playerIsReady("guest");
        Router.go("/choose-room");
      }
    });
  }
}
customElements.define("instructions-page", instructions);
