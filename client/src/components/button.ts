class Button extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");

    this.shadow.innerHTML = `
    <button class="root"></button>
    `;

    const button = this.shadow.querySelector(".root") as any;
    button.textContent = this.textContent || "ups!";

    style.innerHTML = `
      .root{
        font-size: 18px;
        border-radius: 4px;
        padding: 17px 13px;
        background-color:#006CFC;
        color:#D8FCFC;
        min-width: 600px;
        border: 10px solid #001997;
        border-radius: 4px;
        animation: lower .4s ease ;
        margin:auto;
      }
      @media screen and (max-width: 600px){
        .root{
          min-width: 90vw;
          margin:0 5vw;
        }
      }
      @keyframes lower{
        0%{
          transform: translateY(100%);
        }
        75%{
          transform: translateY(-10%);
        }
        100%{
          transform: translateY(0%);
        }
      }
      `;

    this.shadow.appendChild(style);
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("custom-button", Button);
