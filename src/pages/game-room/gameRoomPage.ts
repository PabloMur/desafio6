import { Router } from "@vaadin/router";
import { state } from "../../state";

class GameRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
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
         <custom-button class="startGame escondido">Jugar!</custom-button>
         <div class="currentState"></div>
        </div>
      `;
    style.innerHTML = `
    .container{
      height: 95vh;
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
    `;
    this.appendChild(style);
  }
  beforeClose() {
    const startGame = document.querySelector(".startGame");
    startGame.addEventListener("click", () => {
      Router.go("/instructions");
    });

    window.onbeforeunload = function () {
      console.log("cerrando la pagina");

      return "estas cerrando esta pagina";
    };
  }
}

customElements.define("game-room-page", GameRoomPage);
