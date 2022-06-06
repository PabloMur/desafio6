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
        <div class="message-container">
          <p>Comparte este codigo con tu contrincante:</p> 
          <h3 class="code">${this.roomId}</h3> 
        </div>
      `;
    style.innerHTML = `
      .message-container{
        height: 40vh;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
      }
      p{
        font-size: 30px;
      }

      .code{
        font-size: 70px;
        color: #006CFC;
        margin: 50px;
      }
    `;

    this.appendChild(style);
  }
}
customElements.define("custom-share-code-message", ShareCodeMessage);
