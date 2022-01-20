class Home extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <h1>Vamo Poli vos podes</h1>
      `;
  }
}

customElements.define("home-page", Home);
