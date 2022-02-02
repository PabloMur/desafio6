import { Router } from "@vaadin/router";
import { state } from "../../state";

class BeforeComparition extends HTMLElement {
  connectedCallback() {
    state.subscribe(() => {
      //state.listenRTDBData();
      this.sync();
    });
    this.sync();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <p class="waitingMessage">Esperando que tu oponente elija una opcion!</p>
            <custom-button class="comparar">Comparar</custom-button>
        `;
    style.innerHTML = `
      .escondido{
        display:none;
      }
      .mostrado{
        display: block;
      }
    `;
    this.appendChild(style);
  }
  sync() {
    const cs = state.getState();
    const localMove = cs.rtdbData.playerOne.choice;
    const guestMove = cs.rtdbData.playerTwo.choice;

    this.render();

    const waitingMessage = document.querySelector(".waitingMessage");
    const button = document.querySelector(".comparar");

    console.log(`local => ${localMove}`);
    console.log(`guest => ${guestMove}`);

    button.addEventListener("click", () => {
      Router.go("/comparition");
    });
  }
}

customElements.define("before-comparition", BeforeComparition);
