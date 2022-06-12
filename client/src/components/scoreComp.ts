import { state } from "../state";

class ScoreComp extends HTMLElement {
  playerOneScore: number = 0;
  playerOneName: string;
  playerTwoScore: number = 0;
  playerTwoName: string;
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
         <custom-text>${this.playerOneName} : ${this.playerOneScore}</custom-text>
         <custom-text>${this.playerTwoName} : ${this.playerTwoScore}</custom-text>
        </div>    
        `;
    style.innerHTML = `
        .score-container{
          width: 580px;
          margin: 10px auto;
          background: white;
          text-align: center;
          border: 10px solid blue;
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

  sync() {
    const cs = state.getState();
    this.playerOneName = cs.rtdbData.playerOne.nombre;
    this.playerOneScore = cs.score.playerOne;
    this.playerTwoName = cs.rtdbData.playerTwo.nombre;
    this.playerTwoScore = cs.score.playerTwo;
    this.render();
  }

  connectedCallback() {
    this.sync();
  }
}
customElements.define("custom-score", ScoreComp);
