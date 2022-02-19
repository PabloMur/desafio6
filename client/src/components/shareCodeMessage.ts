import { state } from "../state";
class ShareCodeMessage extends HTMLElement {
  roomId: string;

  connectedCallback() {
    state.subscribe(() => {
      this.syncWhithState();
    });
    this.syncWhithState();
  }
  syncWhithState() {
    const cs = state.getState();
    this.roomId = cs.roomId;
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="messageContainer">
        <p>Comparte este codigo</p> <h3>${this.roomId}</h3> <p>con tu contrincante</p>
        </div>
      `;
  }
}
customElements.define("custom-share-code-message", ShareCodeMessage);
