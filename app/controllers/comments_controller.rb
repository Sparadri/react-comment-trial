class CommentsController < ApplicationController

  def index
    @comment = Comment.new
    @comments = Comment.all
    @user = current_user
  end

  def upvote
    @comment = Comment.find(params[:id])
    if current_user.voted_for? @comment
      current_user.unvote_for @comment
    else
      current_user.up_votes @comment
    end
  end
  # on renvoie tout le commentaire

  def create
    p ">>>>>>>>>>>>>>>>>>>>>>>>>>"
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.save

    render :index
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    render :index
  end

  def comment_params
    params.require(:comment).permit(:content)
  end
end
