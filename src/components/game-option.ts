import { state } from "../state";

class GameOption extends HTMLElement {
  imgURL: string;
  connectedCallback() {
    this.render();
  }
  render() {
    const imgTijera = require("../img/tijera.svg");
    const imgPapel = require("../img/papel.svg");
    const imgPiedra = require("../img/piedra.svg");

    const variant = this.getAttribute("variant");
    const style = document.createElement("style");

    if (variant == "tijera") {
      this.imgURL = imgTijera;
    }

    if (variant == "piedra") {
      this.imgURL = imgPiedra;
    }

    if (variant == "papel") {
      this.imgURL = imgPapel;
    }

    this.innerHTML = `
        <div class="gameObject">
        <img class="image" src="${this.imgURL}">
        </div>
      `;
    style.innerHTML = `
    .gameObject {
        width: auto;
        min-height: 200px;
        margin: 0 10px;
        transition: all .2s ease-in;
      }
      .gameObject:hover{
        transform: scale(1.3);
      }
      .image{
        height: 30vh;
        width: auto;
      }
    
    `;
    this.appendChild(style);
  }
}

customElements.define("game-option", GameOption);
