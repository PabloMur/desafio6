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

    this.shadow.querySelector(".root").textContent = this.textContent || "ups!";

    style.innerHTML = `
      .root{
        font-size: 18px;
        border-radius: 4px;
        padding: 17px 13px;
        background-color:#006CFC;
        color:#D8FCFC;
        width: 90vw;
        border: 10px solid #001997;
        border-radius: 4px;
        animation: lower .4s ease ;
      }
      @media screen and (min-width: 960px){
        .root{
          max-width: 600px;
          margin: 0 auto;
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
