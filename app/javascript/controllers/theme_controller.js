import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  toggle() {
    const html = document.documentElement
    html.classList.toggle("dark")
    
    // Salva a preferência
    const isDark = html.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    
    // Atualiza o ícone
    this.updateIcon(isDark)
  }
  
  updateIcon(isDark) {
    this.element.textContent = isDark ? "☀️" : "🌙"
  }
  
  connect() {
    // Aplica o tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light'
    const isDark = savedTheme === 'dark'
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
    
    this.updateIcon(isDark)
  }
}