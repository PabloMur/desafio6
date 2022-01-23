import { Router } from "@vaadin/router";
import { state } from "../../state";

class GameRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         
         <show-name></show-name>
         <room-code></room-code>
         <custom-button class="createRoom">Crear Sala de Juego</custom-button>
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
}

customElements.define("game-room-page", GameRoomPage);
