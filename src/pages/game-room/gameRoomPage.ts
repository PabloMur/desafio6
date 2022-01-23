import { Router } from "@vaadin/router";
import { state } from "../../state";

class GameRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const nombreDelState = state.getState().nombre;
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title">Piedra Papel o Tijera</custom-text>
         <show-name></show-name>
         
         <custom-button class="startRoom">${nombreDelState}</custom-button>
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
