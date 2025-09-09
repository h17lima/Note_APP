module ApplicationHelper
  # Renderiza ícones SVG do Heroicons.
  # Não depende de gem, usa o SVG puro.
  def heroicon_svg(name, options = {})
    icon_svg = case name.to_s
    when 'eye'
      <<~SVG
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.01 9.963 7.182.04.161.04.338 0 .499c-1.388 4.172-5.325 7.182-9.963 7.182-4.639 0-8.576-3.01-9.964-7.182z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      SVG
    when 'pencil'
      <<~SVG
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.652.663a.75.75 0 01-.9-1.39l.663-2.652a4.5 4.5 0 011.13-1.897L16.863 4.487z" />
        </svg>
      SVG
    when 'trash'
      <<~SVG
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9.75l-.94-.94m-4.28 0l-.94.94m9.1 0l-.94-.94M15 12h-3m-3-3h3m-3 3h3" />
        </svg>
      SVG
    else
      ''
    end

    content_tag(:span, icon_svg.html_safe, options)
  end

  def render_markdown(text)
    renderer = Redcarpet::Render::HTML.new(filter_html: true, hard_wrap: true)
    markdown = Redcarpet::Markdown.new(renderer, extensions = {})
    markdown.render(text).html_safe
  end
end