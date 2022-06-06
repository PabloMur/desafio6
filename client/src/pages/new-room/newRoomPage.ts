import { Router } from "@vaadin/router";
import { state } from "../../state";

class NewRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();

    const startRoom = document.querySelector(".startRoom");
    const nombreDelJugador = document.querySelector(".playerName") as any;
    const emailDelJugador = document.querySelector(".playerEmail") as any;

    startRoom.addEventListener("click", async () => {
      state.setNombreAndEmail(nombreDelJugador.value, emailDelJugador.value);
      state.createPlayer(() => {
        state.signIn(() => {
          state.askNewGameRoom(() => {
            state.accesToGameRoom();
          });
          Router.go("/game-room");
        });
      });
    });
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title">Piedra Papel o Tijera</custom-text>
         
          <div>
            <div>
              <label>Ingresa tu nombre</label>
            </div>
            <input type="text" name="nombre" class="playerName">
          </div>
          <div>
            <div>
              <label>Ingresa tu email</label>
            </div>
            <input type="text" name="email" class="playerEmail">
          </div>
         
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
    .playerName, .playerEmail{
      width: 600px;
      height: 11.5vh;
      color: white;
      font-size: 20px;
      background: #006CFC;
      border: 10px solid #001997;
      border-radius: 4px;
      text-align: center;
    }

    label{
      margin: 10px;
      font-size: 20px;
      font-family: sans-serif;
    }
    `;
    this.appendChild(style);
  }
}

customElements.define("new-room-page", NewRoomPage);
