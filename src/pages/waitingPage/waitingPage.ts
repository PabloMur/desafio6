class WaitingPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <p>Esperando que tu oponente elija una pieza</p>
        `;
  }
}

customElements.define("waiting-page", WaitingPage);
