import { Router } from "@vaadin/router";

class Home extends HTMLElement {
  connectedCallback() {
    this.render();

    const newGameButton = document.querySelector(".newGame");
    const accessToRoomButton = document.querySelector(".accessToRoom");

    newGameButton.addEventListener("click", () => {
      console.log("funcionando correctamente");
      Router.go("/new-room");
    });

    accessToRoomButton.addEventListener("click", () => {
      console.log("estas queriendo acceder a una room conocida");
      Router.go("/access-room");
    });
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="container">
         <custom-text variant="title" class="title">Piedra Papel o Tijera</custom-text>
         <div class="button-container">
          <custom-button class="newGame">Nuevo Juego</custom-button>
          <custom-button class="accessToRoom">Ingresar a Sala</custom-button>
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

      .button-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 30%;
      }

    `;
    this.appendChild(style);
  }
}

customElements.define("home-page", Home);
