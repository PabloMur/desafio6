import { Router } from "@vaadin/router";
import { state } from "../../state";

class WaitingOponent extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
          <div class="contenedor">
            <custom-text>
                Espera hasta que tu oponente este listo para jugar!
            </custom-text>
          </div>
        `;
    style.innerHTML = `
    .contenedor{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }`;
    this.shadow.appendChild(style);
  }
  usersAreReady() {
    const cs = state.getState();

    const ambosListos =
      cs.rtdbData.playerOne.start && cs.rtdbData.playerTwo.start;

    this.render();
    state.listenRTDBData();
    if (ambosListos) Router.go("/choose");
  }
  connectedCallback() {
    state.subscribe(() => {
      this.usersAreReady;
    });
    this.usersAreReady();
  }
}
customElements.define("waiting-oponent-page", WaitingOponent);
