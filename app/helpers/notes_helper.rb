module NotesHelper
  
  def render_markdown(text)
    renderer = Redcarpet::Render::HTML.new(filter_html: true, hard_wrap: true)
    markdown = Redcarpet::Markdown.new(renderer, extensions = {})
    markdown.render(text).html_safe
  end

  def render_markdown_with_links(note)
    text = note.content.dup

    # Substituir [[Nome da Nota]] por link para essa nota
    note.linked_note_titles.each do |linked_title|
      linked_note = note.user.notes.find_by(title: linked_title)
      if linked_note
        text.gsub!("[[#{linked_title}]]", view_context.link_to(linked_title, note_path(linked_note)))
      end
    end

    # Renderiza Markdown normalmente
    renderer = Redcarpet::Render::HTML.new(filter_html: true, hard_wrap: true)
    markdown = Redcarpet::Markdown.new(renderer)
    markdown.render(text).html_safe
  end

end
