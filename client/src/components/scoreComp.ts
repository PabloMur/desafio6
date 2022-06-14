import { state } from "../state";

class ScoreComp extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
        <div class="score-container">
         <custom-text>Score</custom-text>
         <custom-marcador>Score</custom-marcador>
        </div>    
        `;
    style.innerHTML = `
        .score-container{
          width: 580px;
          margin: 10px auto;
          background: white;
          text-align: center;
          border: 10px solid #001997;
          border-radius: 4px;
          display:flex;
          flex-direction:column;
          align-items: center;
        }
        @media(max-width: 600px){
          .score-container{
            width: 86vw;
          }
        }
        `;
    this.shadow.appendChild(style);
  }

  connectedCallback() {
    state.subscribe(() => {
      this.render();
    });
    this.render();
  }
}
customElements.define("custom-score", ScoreComp);
