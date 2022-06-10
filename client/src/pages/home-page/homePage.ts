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
  }
  connectedCallback() {
    this.render();
  }
  // addListeners(){
  //   const newGameButton = document.querySelector(".newGame");
  //   const accessToRoomButton = document.querySelector(".accessToRoom");

  //   newGameButton.addEventListener("click", () => {
  //     console.log("funcionando correctamente");
  //     Router.go("/new-room");
  //   });

  //   accessToRoomButton.addEventListener("click", () => {
  //     console.log("estas queriendo acceder a una room conocida");
  //     Router.go("/access-room");
  //   });
  // }
  // render() {
  //   const style = document.createElement("style");
  //   this.innerHTML = `
  //       <div class="container">
  //         <custom-text variant="title" class="title">Piedra Papel o Tijera</custom-text>

  //         <div class="hands-container">
  //           <game-option variant="piedra"></game-option>
  //           <game-option variant="papel"></game-option>
  //           <game-option variant="tijera"></game-option>
  //         </div>

  //         <div class="button-container">
  //           <custom-button class="newGame">Nuevo Juego</custom-button>
  //           <custom-button class="accessToRoom">Ingresar a Sala</custom-button>
  //         </div>
  //       </div>
  //     `;
  //   style.innerHTML = `
  //     .container{
  //       height: 100vh;
  //       width: 100%;
  //       margin: 0;
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: space-between;
  //       align-items: center;
  //       padding: 20px 20px 30px 20px;
  //       overflow: hidden;
  //     }

  //     @media (max-width:600px){
  //       .container{
  //         justify-content: center;
  //       }
  //     }

  //     .button-container{
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: space-between;
  //       height: 30%;
  //     }
  //     @media (max-width:600px){
  //       .button-container{
  //         height: 20%;
  //       }
  //     }

  //     .hands-container{
  //       display:flex;
  //       margin-top: 50px;
  //     }

  //   `;
  //   this.appendChild(style);
  //   this.addListeners();
  // }
}

customElements.define("home-page", Home);
