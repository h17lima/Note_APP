import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sidebar", "overlay", "content", "themeButton"] 

  connect() {
    this.hide()
    console.log("Controlador sidebar conectado!")
  }

  show() {
    console.log("Método show() chamado!");
    this.sidebarTarget.classList.remove("hidden"); 
    this.overlayTarget.classList.remove("hidden");
    /*this.overlayTarget.classList.add("opacity-100");*/

    setTimeout(() => {
      this.overlayTarget.classList.remove("bg-opacity-0");
      this.overlayTarget.classList.add("bg-opacity-30");
    }, 10);
    
    // MOVE O MENU DE ESQUERDA PARA O CENTRO
    this.sidebarTarget.classList.remove("-translate-x-full");
    this.sidebarTarget.classList.add("translate-x-0");
    
    // MOVE O CONTEÚDO PARA A DIREITA
    this.contentTarget.classList.remove("translate-x-0");
    this.contentTarget.classList.add("translate-x-64");
    
    this.themeButtonTarget.classList.remove("hidden");
  }

  hide() {
    // ESCONDE O MENU
    this.sidebarTarget.classList.remove("translate-x-0");
    this.sidebarTarget.classList.add("-translate-x-full");
    
    // MOVE O CONTEÚDO PARA A POSIÇÃO ORIGINAL
    this.contentTarget.classList.remove("translate-x-64");
    this.contentTarget.classList.add("translate-x-0");

    this.overlayTarget.classList.remove("bg-opacity-30");
    this.overlayTarget.classList.add("bg-opacity-0");
    
    setTimeout(() => {
      this.overlayTarget.classList.add("hidden");
      this.sidebarTarget.classList.add("hidden");
    }, 300);
    
    this.themeButtonTarget.classList.add("hidden");
    console.log("Menu escondido!");
  }
}