import { state } from "../state";

class ScoreComp extends HTMLElement {
  playerOneScore: number = 0;
  playerOneName: string;
  playerTwoScore: number = 0;
  playerTwoName: string;

  connectedCallback() {
    this.sync();
  }
  render() {
    const style = document.createElement("style");
    this.innerHTML = `
        <div class="score-container">
        <custom-text>Score</custom-text>
        <custom-text>${this.playerOneName} : ${this.playerOneScore}</custom-text>
        <custom-text>${this.playerTwoName} : ${this.playerTwoScore}</custom-text>
        </div>    
        `;
    style.innerHTML = `
        .score-container{
          
          width: 50%;
          margin: 0 auto;

        }
        `;
    this.appendChild(style);
  }

  sync() {
    const cs = state.getState();
    this.playerOneName = cs.rtdbData.playerOne.nombre;
    this.playerOneScore = cs.score.local;
    this.playerTwoName = cs.rtdbData.playerTwo.nombre;
    this.playerTwoScore = cs.score.guest;
    this.render();
  }
}
customElements.define("custom-score", ScoreComp);
