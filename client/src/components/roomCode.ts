import { state } from "../state";
class RoomCode extends HTMLElement {
  roomId: string = "0000";
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");

    this.shadow.innerHTML = `<h3 class="code-container">SALA:${this.roomId}</h3>`;

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
    this.shadow.appendChild(style);
  }

  syncWithState() {
    const lastState = state.getState();
    this.roomId = lastState.roomId;
    this.render();
  }

  connectedCallback() {
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
}

customElements.define("room-code", RoomCode);
