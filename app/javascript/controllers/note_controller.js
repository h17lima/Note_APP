import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "deleteButton"]

  selectedNoteIds = [];

  toggleSelection(event) {
    const noteId = event.target.dataset.noteId;
    
    if (event.target.checked) {
      this.selectedNoteIds.push(noteId);
    } else {
      this.selectedNoteIds = this.selectedNoteIds.filter(id => id !== noteId);
    }
    
    this.updateDeleteButtonVisibility();
  }

  updateDeleteButtonVisibility() {
    if (this.selectedNoteIds.length > 0) {
      this.deleteButtonTarget.classList.remove("hidden");
    } else {
      this.deleteButtonTarget.classList.add("hidden");
    }
  }

  async deleteSelected() {
    if (confirm("Tem certeza de que deseja excluir as notas selecionadas?")) {
      const idsToDelete = this.selectedNoteIds;
      
      const response = await fetch(`/notes/destroy_multiple`, {
        method: "DELETE",
        //token para evitar o cross site request forgery
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
        },
        body: JSON.stringify({ ids: idsToDelete })
      });

      if (response.ok) {
        // Remove os elementos da DOM
        idsToDelete.forEach(id => {
          const noteElement = document.getElementById(`note_${id}`);
          if (noteElement) {
            noteElement.remove();
          }
        });

        // Reseta o estado do controlador
        this.selectedNoteIds = [];
        this.updateDeleteButtonVisibility();
        
        // Exibe uma mensagem de sucesso (opcional)
        console.log("Notas excluídas com sucesso!");
      } else {
        console.error("Erro ao excluir as notas.");
      }
    }
  }
}