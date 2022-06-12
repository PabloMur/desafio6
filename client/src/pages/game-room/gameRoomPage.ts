import { Router } from "@vaadin/router";
import { state } from "../../state";

class GameRoomPage extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
        <div class="container">
         <div class="container-room-score">
          <custom-marcador></custom-marcador>
          <room-code></room-code>
         </div>
         <div class="share-message">
          <custom-share-code-message></custom-share-code-message>
         </div>
         <custom-text class="cuandoEstesListo escondido">Ya tienes un contricante! Preciona Comenzar cuando estés listo.</custom-text>
         <custom-button class="startGame escondido">Comenzar!</custom-button>
         
        </div>
      `;

    style.innerHTML = `
    .container{
      height: 100vh;
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .container-room-score{
      width: 90%;
      margin: 0 auto;
      display:flex;
      align-items:center;
      justify-content: space-between;
    }
    .escondido{
      display:none;
    }
    .mostrado{
      display:inherit;
    }
    `;
    this.shadow.appendChild(style);
  }
  beforeClose() {
    this.render();
    const cs = state.getState();

    const button = this.shadow.querySelector(".startGame") as any;
    const shareMessage = this.shadow.querySelector(".share-message") as any;
    const bothReady = this.shadow.querySelector(".cuandoEstesListo") as any;

    if (cs.rtdbData.playerTwo.nombre !== "playerTwo") {
      shareMessage.classList.toggle("escondido");
      bothReady.classList.toggle("escondido");
      bothReady.classList.toggle("mostrado");
      button.classList.toggle("escondido");
      button.classList.toggle("mostrado");
    }

    button.addEventListener("click", () => {
      //state.listenRTDBDataReplay();
      Router.go("/instructions");
    });
  }

  connectedCallback() {
    state.subscribe(() => {
      this.beforeClose();
    });
    this.beforeClose();
  }
}

customElements.define("game-room-page", GameRoomPage);
