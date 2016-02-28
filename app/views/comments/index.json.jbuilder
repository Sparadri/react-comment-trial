# app/views/products/index.json.jbuilder
json.comments do
  json.array! @comments do |comment|
    json.partial! "comments/comment", comment: comment
    json.current_user do
      json.extract! @user, :avatar_url
    end
  end
end
