class ColumnContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
            <div class="column-container"></div>
        `;
    style.innerHTML = `
        .column-container{
            height: 95vh;
            width: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
    `;
  }
}

customElements.define("column-div", ColumnContainer);
