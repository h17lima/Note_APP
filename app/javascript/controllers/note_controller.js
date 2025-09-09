import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["display", "form"]

  connect() {
    console.log("Controlador de nota conectado!");
  }

  showForm(event) {
    event.preventDefault(); 

    this.displayTarget.classList.add("hidden");
    this.formTarget.classList.remove("hidden");
    
    this.formTarget.querySelector("input, textarea").focus();
  }

  hideForm(event) {
    if (event) {
      event.preventDefault(); 
    }
    
    this.displayTarget.classList.remove("hidden");
    this.formTarget.classList.add("hidden");
  }
}