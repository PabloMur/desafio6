import { Router } from "@vaadin/router";
import { state } from "../../state";

class PreGameRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  addListeners(){
    const getInGameRoom = document.querySelector(".startRoom");
    const nombre = document.querySelector(".playerName") as any;
    const email = document.querySelector(".playerEmail") as any;

    getInGameRoom.addEventListener("click", async () => {
      await state.setNombreAndEmail(nombre.value, email.value);
      await state.createPlayer(false);
      Router.go("/game-room");
      await state.signIn(async () => {
        await state.accesToGameRoom(async () => {
          await state.guestPlayer(() => {
            console.log("Esto se ejecuto");
          });
        });
      });
    });
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title">Ingresa tu nombre</custom-text>
         
          <input type="text" name="nombre" placeholder="Ingresa tu nombre" class="playerName">
          <input type="text" name="email" placeholder="Ingresa tu email" class="playerEmail">
         
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
      width: 57%;
      height: 10vh;
      border: 5px solid blue;
      border-radius: 5px;
      padding: 7px;
      text-align: center;
    }
    `;
    this.appendChild(style);
    this.addListeners();
  }
}

customElements.define("pre-game-room-page", PreGameRoomPage);
