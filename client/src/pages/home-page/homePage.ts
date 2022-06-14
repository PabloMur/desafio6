class Home extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    this.shadow.innerHTML = `
      <div class="container">
      <custom-text variant="title" class="title">Piedra Papel o Tijera</custom-text>
      <welcome-form></welcome-form>
      </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
      .container{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `;
    this.shadow.appendChild(style);
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("home-page", Home);
