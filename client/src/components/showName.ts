import { state } from "../state";
class ShowName extends HTMLElement {
  nombre: string;
  connectedCallback() {
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.nombre;
    this.render();
  }

  render() {
    this.innerHTML = `<p>${this.nombre}</p>`;
  }
}

customElements.define("show-name", ShowName);
