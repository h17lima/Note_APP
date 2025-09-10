class Note < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :content, presence: true

  # Executa o método para extrair tags antes de salvar a nota
  before_save :extract_tags

  # Detecta notas linkadas no conteúdo
  def linked_note_titles
    content.scan(/\[\[(.*?)\]\]/).flatten
  end

  def backlinks
    user.notes.select { |n| n.content.include?("[[#{title}]]") }
  end

  private

  # Método para extrair palavras com '#' do conteúdo e salvar na coluna tags
  def extract_tags
    self.tags = self.content.scan(/#(\w+)/).flatten.join(", ")
  end
end