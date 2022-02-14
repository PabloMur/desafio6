import { Router } from "@vaadin/router";
import { state } from "../../state";

class BeforeComparition extends HTMLElement {
  connectedCallback() {
    state.subscribe(() => {
      this.sync();
    });
    this.sync();
  }
  render(cb?) {
    const cs = state.getState();
    const style = document.createElement("style");
    this.innerHTML = `
    <custom-button class="comparar escondido">Comparar</custom-button>
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
    if (cb) {
      cb();
    }
  }
  sync() {
    state.testParaEscucharSiLosDosJugadoresYaElijieron();
    this.render(() => {
      const cs = state.getState();

      if (cs.choice != "none" && cs.contrincanteChoice != "none") {
        Router.go("/comparition");
      } else if (cs.contrincanteChoice == "none" || cs.choice == "none") {
        Router.go("/waiting");
      }
    });
  }
}

customElements.define("before-comparition", BeforeComparition);
