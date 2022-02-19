import { Router } from "@vaadin/router";
import { state } from "../../state";

class PreGameRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();

    const getInGameRoom = document.querySelector(".startRoom");
    const nombre = document.querySelector(".playerName") as any;

    getInGameRoom.addEventListener("click", () => {
      const cs = state.getState();
      state.setNombre(nombre.value);
      state.guestPlayer(nombre.value, cs.rtdbRommId);
      state.playerIsOnline("guest", cs.rtdbRoomId);
      state.accesToGameRoom(cs.roomId);
      Router.go("/game-room");
    });
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title">Ingresa tu nombre</custom-text>
         
          <input type="text" name="nombre" placeholder="Ingresa tu nombre" class="playerName">
         
         <custom-button class="startRoom">Comenzar</custom-button>
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
