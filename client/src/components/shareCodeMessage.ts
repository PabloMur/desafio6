import { state } from "../state";
class ShareCodeMessage extends HTMLElement {
  roomId: string = "0000";
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
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

    this.shadow.appendChild(style);
  }
  syncWhithState() {
    this.render();
    const cs = state.getState();
    this.roomId = cs.roomId;
  }
  connectedCallback() {
    state.subscribe(() => {
      this.syncWhithState();
    });
    this.syncWhithState();
  }
}
customElements.define("custom-share-code-message", ShareCodeMessage);
