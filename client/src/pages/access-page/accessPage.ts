import { Router } from "@vaadin/router";
import { state } from "../../state";

class AccessRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  addListeners() {
    const form = document.querySelector(".form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const target = e.target as any;
      const roomCode = target.roomcode.value;
      const currentState = state.getState();
      currentState.roomId = Number(roomCode);
      await state.setState(currentState);
      Router.go("/pre-game-room");
      // await state.signIn(() => {
      //   state.accessRoom(() => {
      //     Router.go("/chat");
      //   });
      // });
    });
  }

  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title">Piedra Papel o Tijera</custom-text>
         <div>
         <form class="form">
             <input type="text" name="roomcode"></>
             <button class="button">Ingresar a la sala</button>
         </form>
     </div>
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
      .code{
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

customElements.define("access-page", AccessRoomPage);
