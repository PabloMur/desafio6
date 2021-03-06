import { Router } from "@vaadin/router";
import { state } from "../../state";

class AccessRoomPage extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.addListeners();
  }

  addListeners() {
    this.render();
    const form = this.shadow.querySelector(".form") as any;
    const currentState = state.getState();
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const target = e.target as any;
      const roomCode = target.roomcode.value;
      currentState.roomId = roomCode;
      currentState.roomCreator = false;
      state.setState(currentState);

      state.signIn(() => {
        state.accesToGameRoom(() => {
          Router.go("/game-room");
          state.guestPlayer();
        });
      });
    });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
        <div class="container">
         <custom-text variant="title">Piedra Papel o Tijera</custom-text>
         <div>
         <form class="form">
             <input type="text" name="roomcode" class="code"></>
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
      .form{
        height: 50vh;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media(max-width: 600px){
        .form{
          
          width: 90vw;
        }
      }
      .code{
        width: 100%;
        height: 45px;
        border-radius: 15px;
        border:none;
        padding: 7px;
        text-align: center;
        box-shadow: 5px 5px 2px #c7c7c7;
      }
      .button{
        width: 103%;
        height: 60px;
        background: #006CFC;
        border: none;
        border-radius: 15px;
        margin-top: 20px;
        color: white;
        font-size: 20px;
      }
    `;
    this.shadow.appendChild(style);
  }
}

customElements.define("access-page", AccessRoomPage);
