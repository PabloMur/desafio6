import { Router } from "@vaadin/router";
import { state } from "../../state";

class PreGameRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
    const createRoom = document.querySelector(".createRoom");
    createRoom.addEventListener("click", () => {
      state.askNewGameRoom();
      console.log("crear Sala");
    });
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
        <h1>Donde se Va a CREAR una room y, una vez creada, te dirijira a la sala de la rtdb</h1>
         <custom-text variant="title">Piedra Papel o Tijera</custom-text>
         <show-name></show-name>
         
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

customElements.define("pre-game-room-page", PreGameRoomPage);
