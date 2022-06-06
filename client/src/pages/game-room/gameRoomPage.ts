import { Router } from "@vaadin/router";
import { state } from "../../state";

class GameRoomPage extends HTMLElement {
  connectedCallback() {
    state.subscribe(() => {
      this.beforeClose();
    });
    this.beforeClose();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
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
    this.appendChild(style);
  }
  beforeClose() {
    this.render();
    const cs = state.getState();

    const button = document.querySelector(".startGame");
    const shareMessage = document.querySelector(".share-message");
    const bothReady = document.querySelector(".cuandoEstesListo");

    // if (cs.rtdbData.playerTwo.online == true) {
    //   shareMessage.classList.toggle("escondido");
    //   bothReady.classList.toggle("escondido");
    //   bothReady.classList.toggle("mostrado");
    //   button.classList.toggle("escondido");
    //   button.classList.toggle("mostrado");
    // }

    button.addEventListener("click", () => {
      Router.go("/instructions");
    });
  }
}

customElements.define("game-room-page", GameRoomPage);
