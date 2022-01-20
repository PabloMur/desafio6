class CustomText extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <p>texto de prueba</p>
      `;
  }
}
customElements.define("custom-text", CustomText);
