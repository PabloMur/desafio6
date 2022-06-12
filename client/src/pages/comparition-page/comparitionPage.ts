import { Router } from "@vaadin/router";

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
    setTimeout(function () {
      Router.go("/result");
    }, 2000);
  }
}

customElements.define("comparition-page", ComparitionPage);
