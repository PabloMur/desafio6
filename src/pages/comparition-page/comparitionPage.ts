import { state } from "../../state";
import { Router } from "@vaadin/router";

class ComparitionPage extends HTMLElement {
  connectedCallback() {
    state.subscribe(() => {
      this.render();
    });
    this.render();
  }
  render() {
    this.innerHTML = `
    <p>Comparition</p>
    <muestra-jugada></muestra-jugada>
    `;
  }
  sync() {
    this.render();
  }
}

customElements.define("comparition-page", ComparitionPage);
