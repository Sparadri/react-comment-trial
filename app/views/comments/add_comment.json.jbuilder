json.extract! @comment, :content
json.user do
  json.extract! @user, :avatar_url
end
