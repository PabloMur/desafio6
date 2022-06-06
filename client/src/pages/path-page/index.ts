import { state } from "../../state";
import { Router } from "@vaadin/router";

class Path extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <div class="container">
                <custom-questionary></custom-questionary>
            </div>
        `;
  }
}
customElements.define("path-page", Path);
