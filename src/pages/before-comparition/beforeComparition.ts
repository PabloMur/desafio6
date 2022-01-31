import { Router } from "@vaadin/router";
import { state } from "../../state";

class BeforeComparition extends HTMLElement {
  connectedCallback() {
    state.listenRTDBData();
    this.render();
    const button = document.querySelector(".comparar");
    button.addEventListener("click", () => {
      Router.go("/comparition");
    });
  }
  render() {
    this.innerHTML = `
            <custom-button class="comparar">Comparar</custom-button>
        `;
  }
}

customElements.define("before-comparition", BeforeComparition);
