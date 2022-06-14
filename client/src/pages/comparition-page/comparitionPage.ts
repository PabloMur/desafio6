import { Router } from "@vaadin/router";
import { state } from "../../state";

class ComparitionPage extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    this.shadow.innerHTML = `
    <muestra-jugada></muestra-jugada>
    `;
  }
  connectedCallback() {
    this.render();
    const cs = state.getState();
    setTimeout(() => {
      state.whoWins(
        cs.rtdbData.playerOne.choice,
        cs.rtdbData.playerTwo.choice,
        () => {
          Router.go("/result");
          state.listenRTDBData();
        }
      );
    }, 2000);
  }
}

customElements.define("comparition-page", ComparitionPage);
