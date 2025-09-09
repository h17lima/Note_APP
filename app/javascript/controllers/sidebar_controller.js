import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sidebar", "overlay", "content", "themeButton"] 

  connect() {
    this.hide()
    console.log("Controlador sidebar conectado!")
  }

  show() {
    // 1. Remove a classe 'hidden' do overlay para prepará-lo para a transição
    this.overlayTarget.classList.remove("hidden")

    // 2. Inicia as transições de movimento para a sidebar e o conteúdo principal
    this.sidebarTarget.classList.remove("translate-x-full")
    this.sidebarTarget.classList.add("translate-x-0")
    
    this.contentTarget.classList.remove("translate-x-0")
    this.contentTarget.classList.add("-translate-x-64")
    
    // 3. Usa um pequeno atraso para iniciar a transição de opacidade do overlay
    setTimeout(() => {
      this.overlayTarget.classList.remove("opacity-0")
      this.overlayTarget.classList.add("opacity-100")
    }, 10)

    // Mostra o botão do tema, se necessário
    this.themeButtonTarget.classList.remove("hidden")
    
    console.log("Menu mostrado!")
  }

  hide() {
    // 1. Inicia as transições de movimento para esconder a sidebar e o conteúdo principal
    this.sidebarTarget.classList.remove("translate-x-0")
    this.sidebarTarget.classList.add("translate-x-full")
    
    this.contentTarget.classList.remove("-translate-x-64")
    this.contentTarget.classList.add("translate-x-0")
    
    // 2. Inicia a transição de opacidade do overlay para fazê-lo desaparecer
    this.overlayTarget.classList.remove("opacity-100")
    this.overlayTarget.classList.add("opacity-0")

    // 3. Adiciona a classe 'hidden' no overlay somente após a transição
    setTimeout(() => {
      this.overlayTarget.classList.add("hidden")
    }, 300) 

    // Esconde o botão do tema
    this.themeButtonTarget.classList.add("hidden")
    console.log("Menu escondido!")
  }
}