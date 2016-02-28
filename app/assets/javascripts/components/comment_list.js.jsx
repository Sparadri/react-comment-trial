var CommentList = React.createClass({
  getInitialState: function(){
    return {
      comments: this.props.comments
    }
  },

  addComments: function(comment) {
    var that = this
    var comments = this.state.comments;
    comments.push(
        { content: comment,
          user:
            { avatar_user: that.props.comments[0].current_user.avatar_url }
        });
    this.setState({comments: comments})
  },

  handleReload: function(){
    var that = this
    $.ajax({
      type: "GET",
      url: Routes.comments_path(),
      success: function() {
       that.setState({
         comments: that.props.comments
       })
      }
    })
  },

  render: function() {
    return (
      <div>
        {this.state.comments.map(function(comment){
          return <CommentListElement key={comment.id} comment={comment} />;
        })}
        <AddComment addComments={this.addComments}/>
      </div>
    );
  }
});


