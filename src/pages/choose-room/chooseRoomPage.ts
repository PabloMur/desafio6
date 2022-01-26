class ChoosePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <p>Choose</p>
      `;
  }
}
customElements.define("choose-room-page", ChoosePage);
