import { Router } from "@vaadin/router";

class ComparitionPage extends HTMLElement {
  connectedCallback() {
    this.render();
    const button = document.querySelector(".goToResult");
    button.addEventListener("click", () => {
      Router.go("/result");
    });
  }
  render() {
    this.innerHTML = `
    <muestra-jugada></muestra-jugada>
    <custom-button class="goToResult">Ir a resutado</custom-button>
    `;
  }
}

customElements.define("comparition-page", ComparitionPage);
