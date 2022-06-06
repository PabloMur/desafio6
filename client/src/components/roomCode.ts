import { state } from "../state";
class RoomCode extends HTMLElement {
  roomId: string;
  connectedCallback() {
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.roomId = lastState.roomId;
    this.render();
  }

  render() {
    const style = document.createElement("style");

    this.innerHTML = `<h3 class="code-container">SALA:${this.roomId}</h3>`;

    style.innerHTML = `
      .code-container{
        padding: 15px;
        background-color:#006CFC;
        border: 10px solid #001997;
        border-radius: 4px;
        color: white;
        margin-right: 15px;
        font-family: sans-serif;
      }
    `;
    this.appendChild(style);
  }
}

customElements.define("room-code", RoomCode);
