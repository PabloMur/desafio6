import { Router } from "@vaadin/router";

class AccessRoomPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title">Piedra Papel o Tijera</custom-text>
         <input type="text" name="nombre" placeholder="codigo" class="playerName">
         <custom-button class="accessToRoom">Ingresar a una Sala</custom-button>
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

customElements.define("access-page", AccessRoomPage);
