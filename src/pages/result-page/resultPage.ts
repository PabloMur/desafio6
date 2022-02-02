import { state } from "../../state";
class ResultPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const cs = state.getState();
    this.innerHTML = `
            <p></p>
        `;
  }
}
