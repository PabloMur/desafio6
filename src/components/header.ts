class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <div class="header"></div>
        `;

    style.innerHTML = `
        .header{
            height: 10vh;
            width: 100%;
            background: red;
        }
        `;
    this.appendChild(style);
  }
}

customElements.define("custom-header", Header);
