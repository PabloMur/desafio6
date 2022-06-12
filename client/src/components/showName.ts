import { state } from "../state";
class ShowName extends HTMLElement {
  shadow: ShadowRoot;
  nombre: string = "Player Name";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadow.innerHTML = `<p>${this.nombre}</p>`;
  }
  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.nombre;
    this.render();
  }

  connectedCallback() {
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
}

customElements.define("show-name", ShowName);
