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
    this.innerHTML = `<p>SALA:${this.roomId}</p>`;
  }
}

customElements.define("room-code", RoomCode);
