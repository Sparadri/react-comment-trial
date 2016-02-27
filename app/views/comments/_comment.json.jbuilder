json.extract! comment, :content, :id

json.user do
  json.extract! comment.user, :avatar_url
end

json.up_votes comment.votes_for.count

if user_signed_in?
  json.up_voted current_user.voted_for? comment
end
