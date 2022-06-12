class Path extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
      <div class="container">
        <custom-questionary></custom-questionary>
      </div>
    `;
    style.innerHTML = `
      .container{
        height: 100vh;
        display:flex;
        justify-content:center;
        align-items:center;
      }
    `;
    this.shadow.appendChild(style);
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("path-page", Path);
