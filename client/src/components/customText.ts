class CustomText extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const variant = this.getAttribute("variant") || "body";
    const div = document.createElement("div");
    const style = document.createElement("style");

    style.innerHTML = `
        .title{
            font-size:80px;
            font-weight: bold;
            color: #009048;
            transition: all 3s ease;
        }
        @media (max-width:600px){
          .title{
            text-align:center;
          }
        }
        .body{
            font-size: 30px;
            max-width: 600px;
            margin-bottom: 20px;
        }
      `;
    div.className = variant;
    div.textContent = this.textContent;
    this.shadow.appendChild(div);
    this.shadow.appendChild(style);
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("custom-text", CustomText);
