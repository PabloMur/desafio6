import { Router } from "@vaadin/router";
import { start } from "repl";
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
         <show-name></show-name>
         <room-code></room-code>
         <custom-marcador></custom-marcador>
         <custom-button class="startGame">Jugar!</custom-button>
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
    .playerName{
      width: 57%;
      height: 10vh;
      border: 5px solid blue;
      border-radius: 5px;
      padding: 7px;
      text-align: center;
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
