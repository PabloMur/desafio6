import { state } from "../../state";
import { Router } from "@vaadin/router";

class WelcomeForm extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  render() {
    const style = document.createElement("style");
    this.shadow.innerHTML = `
      <div class="form-container">
        <form class="form">
          <div>
            <label class="label">Tu Email</label>
          </div>
          <input type="text" name="email" class="input">
          <div>
            <label class="label">Tu Nombre</label>
          </div>
          <input type="text" name="nombre" class="input">
          <div>
            <button class="form-button">Comenzar</button>
          </div>
        </form>
      </div>
    `;
    style.innerHTML = `
    .form-container{
      height: 95vh;
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .input{
      width: 600px;
      height: 11.5vh;
      color: white;
      font-size: 20px;
      background: #006CFC;
      border: 10px solid #001997;
      border-radius: 4px;
      text-align: center;
    }

    label{
      margin: 10px;
      font-size: 20px;
      font-family: sans-serif;
    }
    button {
      font-size: 18px;
      border-radius: 4px;
      padding: 17px 13px;
      background-color: #006CFC;
      color: #D8FCFC;
      width: 90vw;
      border: 10px solid #001997;
      border-radius: 4px;
      animation: lower .4s ease;
    }
    
    @media screen and (min-width: 960px) {
      button {
        max-width: 600px;
        margin: 0 auto;
      }
    }
    
    @keyframes lower {
      0% {
        transform: translateY(100%);
      }
    
      75% {
        transform: translateY(-10%);
      }
    
      100% {
        transform: translateY(0%);
      }
    }
    `;
    this.shadow.appendChild(style);
  }
  addListeners() {
    this.render();
    const form = this.shadow.querySelector(".form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const target = e.target as any;
      const email = target.email.value;
      const nombre = target.nombre.value;
      state.setNombreAndEmail(nombre, email);
      Router.go("/path");
      await state.createPlayer();
    });
  }
  connectedCallback() {
    this.addListeners();
  }
}
customElements.define("welcome-form", WelcomeForm);
