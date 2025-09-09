class Note < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :content, presence: true

  # Detecta notas linkadas no conteúdo
  def linked_note_titles
    content.scan(/\[\[(.*?)\]\]/).flatten
  end

  def backlinks
    user.notes.select { |n| n.content.include?("[[#{title}]]") }
  end
end
