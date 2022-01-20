import { Router } from "@vaadin/router";

class Home extends HTMLElement {
  connectedCallback() {
    this.render();

    const newGameButton = document.querySelector(".newGame");
    const accessToRoomButton = document.querySelector(".accessToRoom");

    newGameButton.addEventListener("click", () => {
      console.log("funcionando correctamente");
    });

    accessToRoomButton.addEventListener("click", () => {
      console.log("estas queriendo acceder a una room conocida");
      Router.go("/access-room");
    });
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <custom-header></custom-header>
        <div class="container">
         <h1>Vamo Poli vos podes</h1>
         <custom-text>Piedra Papel o Tijera</custom-text>
         <custom-button class="newGame">Nuevo Juego</custom-button>
         <custom-button class="accessToRoom">Ingresar a una Sala</custom-button>
        </div>
      `;
    style.innerHTML = `
      .container{
        background: pink;
      }
    `;
    this.appendChild(style);
  }
}

customElements.define("home-page", Home);
