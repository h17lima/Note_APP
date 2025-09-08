json.extract! note, :id, :title, :content, :tags, :user_id, :created_at, :updated_at
json.url note_url(note, format: :json)
