# app/views/products/index.json.jbuilder
json.comments do
  json.array! @comments do |comment|
    json.partial! "comments/comment", comment: comment
  end
end
