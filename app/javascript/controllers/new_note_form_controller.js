import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["formContainer", "form"]

  // Chamada pelo botão "+"
  toggleForm() {
    this.formContainerTarget.classList.toggle("hidden");
    if (this.formContainerTarget.classList.contains("hidden")) {
      this.resetForm();
    }
  }

  // Chamada pelo evento turbo:submit-end no formulário
  hideFormAndReset(event) {
    if (event.detail.success) {
      this.hideForm();
    }
  }

  // Chamada pelo evento click@document na tag <body>
    hideFormOutsideClick(event) {
        const isClickInside = this.formContainerTarget.contains(event.target);
        const isFormVisible = !this.formContainerTarget.classList.contains("hidden");
        
        // LINHA DE CÓDIGO TEMPORÁRIA ABAIXO
        console.log("Formulário visível?", isFormVisible, "| Clique dentro?", isClickInside);
        
        if (isFormVisible && !isClickInside) {
        this.hideForm();
        }
    }
  
  // Função ÚNICA para ocultar o formulário e resetar campos
  hideForm() {
    this.formContainerTarget.classList.add("hidden");
    this.resetForm();
  }

  resetForm() {
    this.formTarget.reset();
  }
}